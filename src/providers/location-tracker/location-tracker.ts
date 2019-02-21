import { Injectable, NgZone } from '@angular/core';
import { BackgroundGeolocation, BackgroundGeolocationConfig } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/share';
// import 'rxjs/add/operator/map';
import { Api } from '../api/api';

@Injectable()
export class LocationTracker {

  public watch: any;
  public lat: number = 0;
  public lng: number = 0;

  constructor(public zone: NgZone,
    public api: Api,
    private backgroundGeolocation: BackgroundGeolocation,
    private geolocation: Geolocation) {
  }

  startTracking(account: any) {
    // Background Tracking

    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 0,
      stationaryRadius: 20,
      distanceFilter: 10,
      debug: false,
      interval: 5000
    };

    this.backgroundGeolocation.configure(config).subscribe((location) => {

      console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.lat = location.latitude;
        this.lng = location.longitude;
        let data: { usuario: any; senha: any; equipe: any; latitude: any; longitude: any } = {
          usuario: account['usuario'],
          senha: account['senha'],
          equipe: account['equipe'],
          latitude: location.latitude,
          longitude: location.longitude
        };
        this.updateLocation(data);
      });

    }, (err) => {
      console.log(err);
    });

    // this.backgroundGeolocation.configure(config).then((location) => {
    //   console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

    //   // Run update inside of Angular's zone
    //   this.zone.run(() => {
    //     this.lat = location.latitude;
    //     this.lng = location.longitude;

    //     let data: { usuario: any; senha: any; equipe: any; latitude: any; longitude: any } = {
    //       usuario: account['usuario'],
    //       senha: account['senha'],
    //       equipe: account['equipe'],
    //       latitude: location.latitude,
    //       longitude: location.longitude
    //     };
    //     this.updateLocation(data);

    //   });
    // }).catch((err) => {
    //   console.log('BackgroundGeolocation error');
    // });

    // Turn ON the background-geolocation system.
    this.backgroundGeolocation.start();


    // Foreground Tracking
    let options = {
    frequency: 5000,
    enableHighAccuracy: true
    };

    this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
      console.log(position);
      // Run update inside of Angular's zone
      this.zone.run(() => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        //position.timestamp
        let data: { usuario: any; senha: any; equipe: any; latitude: any; longitude: any } = {
          usuario: account['usuario'],
          senha: account['senha'],
          equipe: account['equipe'],
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        this.updateLocation(data);
      });
    });
    //return Promise.resolve({latitude: this.lat, longitude: this.lat});
  }

  updateLocation(data: any) {
    let seq = this.api.post('updatelocation', data).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  stopTracking() {
    console.log('stopTracking');
    this.backgroundGeolocation.finish();
    this.watch.unsubscribe();
  }
}
