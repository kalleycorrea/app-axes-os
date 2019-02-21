import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User, LocationTracker } from "../../providers";

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  latitude: number = 0 ;
  longitude: number = 0;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public user: User,
    public locationTracker: LocationTracker) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MapaPage');
  }

  startTracking(){
    // this.locationTracker.startTracking(this.user._user[0]).then(result => {
    //   //this.currentItems =  result;
    //   this.latitude = result.latitude;
    //   this.longitude = result.longitude;
    // });

    this.locationTracker.startTracking(this.user._user[0]);
    // setTimeout(() => {}, 4000);
    // this.latitude = this.locationTracker.lat;
    // this.longitude = this.locationTracker.lng;
    return;
  }
}
