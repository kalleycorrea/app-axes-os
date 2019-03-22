import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { User, Atendimentos, Equipes, LocationTracker } from "../../providers";

declare var google;

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  atendimentosList: any[];
  equipesList: any[];
  account: { usuario: any; senha: any; tipo: any; grupo: any; equipe: any; nomeequipe: any; tecnicoequipe: any; filtroBusca: any } = {
    usuario: '',
    senha: '',
    tipo: '',
    grupo: '',
    equipe: '',
    nomeequipe: '',
    tecnicoequipe: '',
    filtroBusca: ''
  };
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  startPosition: any;
  //tecnicosPosition: any[] = [];
  //clientesPosition: any[] = [];

  colors: string[] = [
    "0000ff", //blue
    "ff0000", //red
    "00cc00", //green
    "ffff00", //yellow
    "f9900",  //orange
    "ff0066", //pink
    "737373", //grey
    "660033"  //purple
  ];
  nextColor: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private geolocation: Geolocation,
    public toastCtrl: ToastController,
    public atendimentos: Atendimentos,
    public user: User,
    public equipes: Equipes,
    public locationTracker: LocationTracker) {
      this.account = {
        "usuario": this.user._user[0]['usuario'],
        "senha": this.user._user[0]['senha'],
        "tipo": this.user._user[0]['tipo'],
        "grupo": this.user._user[0]['idgrupo'],
        "equipe": this.user._user[0]['equipe'],
        "nomeequipe": this.user._user[0]['nomeequipe'],
        "tecnicoequipe": this.user._user[0]['tecnicoequipe'],
        "filtroBusca": ''
      };
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MapaPage');
  }

  ionViewDidEnter() {
    this.nextColor = 0;
    this.atendimentos.getAtendimentos(this.account).then(resultAtendimentos => {
      this.atendimentosList = resultAtendimentos;

      this.equipes.getEquipes(this.account).then(resultEquipes => {
        this.equipesList = resultEquipes;
      });

      this.loadMap();
    });
  }

  doRefresh(refresher) {
    this.nextColor = 0;
    this.atendimentos.getAtendimentos(this.account).then((resultAtendimentos) => {
      this.atendimentosList = resultAtendimentos;
      if(refresher != 0)
        //refresher.complete();
        setTimeout(() => {
          refresher.complete();
        }, 2000);
    });

    this.equipes.getEquipes(this.account).then((resultEquipes) => {
      this.equipesList = resultEquipes;
      if(refresher != 0)
        //refresher.complete();
        setTimeout(() => {
          refresher.complete();
        }, 2000);
    });

    this.loadMap();
  }

  loadMap() {
    this.getStartPosition();
    const mapOptions = {
      zoom: 18,
      center: this.startPosition,
      zoomControl: true,
      draggable: true,
      scaleControl: false,
      scrollwheel: false,
      disableDefaultUI: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP //roadmap, satellite, hybrid, terrain
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarkers();
  }

  getStartPosition() {
    if (this.account.tipo == 'G'){
      this.startPosition = new google.maps.LatLng(-3.08907235, -60.06175697); //Sede Axes
    } else {
      // Pega a posição atual do dispositivo do técnico
      this.geolocation.getCurrentPosition()
      .then((resp) => {
        this.startPosition = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      }).catch((error) => {
        // Em caso de erro, define a sede da Axes como posição inicial
        this.startPosition = new google.maps.LatLng(-3.08907235, -60.06175697); //Sede Axes
      });
    }
  }

  addMarkers() {
    // Pega a posição atual do dispositivo
    if (this.account.tipo == 'G'){
      if (this.equipesList.length>0) {
        for (let equipe of this.equipesList) {
          // let color = this.getColor();
          if (this.atendimentosList.length>0) {
            let clientes = this.atendimentosList.filter(atendimento => atendimento.equipe == equipe.id);
            for (let cliente of clientes) {
              this.addMarker(cliente, 'C', cliente.Apelido, '0000ff');
            }
          }
          this.addMarker(equipe, 'T', equipe.nome, '0000ff');
        }
      } else {
        for (let cliente of this.atendimentosList) {
          this.addMarker(cliente, 'C', cliente.Apelido, 'ff0000');
        }
      }
    } else {
      // add Marker do Técnico
      this.geolocation.getCurrentPosition()
      .then((resp) => {
        this.addMarker({MapsLat: resp.coords.latitude, MapsLng: resp.coords.longitude}, 'T', ((this.account.nomeequipe != '') ? this.account.nomeequipe : this.account.usuario), '0000ff');
      }).catch((error) => {
        // Em caso de erro, define a sede da Axes como posição inicial
        this.addMarker({MapsLat: -3.08907235, MapsLng: -60.06175697}, 'T', ((this.account.nomeequipe != '') ? this.account.nomeequipe : this.account.usuario), '0000ff');
      });
      // add Marker dos atendimentos do Técnico
      for (let cliente of this.atendimentosList) {
        // this.clientesPosition.push(new google.maps.LatLng(item['MapsLat'], item['MapsLng']));
        this.addMarker(cliente, 'C', cliente.Apelido, 'ff0000');
      }
    }
  }

  addMarker(item: any, tipo: string, titulo: string, pinColor: string) {
    // Tipo: C=Cliente; T=Tecnicos;

    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
    var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
        new google.maps.Size(40, 37),
        new google.maps.Point(0, 0),
        new google.maps.Point(12, 35));

    let marker = new google.maps.Marker({
      map: this.map,
      position: {lat: parseFloat(item.MapsLat), lng: parseFloat(item.MapsLng)},
      // title: titulo,
      // label: {
      //   color: '#262626', //grey
      //   fontWeight: (tipo == 'T') ? 'bold' : 'normal',
      //   text: titulo,
      // },
      icon: (tipo == 'T') ? 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      // icon: {
      //   path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
      //   strokeColor: "red",
      //   scale: 3
      // },
      // icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      // icon: pinImage,
      // shadow: pinShadow,
      // icon: {
      //   labelOrigin: new google.maps.Point(50, 25),
      //   url: "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
      //   size: new google.maps.Size(21, 34),
      //   origin: new google.maps.Point(0, 0),
      //   anchor: new google.maps.Point(11, 40),
      // },
      animation: google.maps.Animation.DROP,
      draggable: false,
    });
    if (tipo == 'C') {
      let infoMarker = `<h4>${item['Apelido']}</h4><br>${item['DescTopico']}`;
      this.addInfoWindow(marker, infoMarker);
    } else if (tipo == 'T') {
      let infoMarker = `<h4>${titulo}</h4>`;
      this.addInfoWindow(marker, infoMarker);
    }
  }

  addInfoWindow(marker: any, content: any) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    // Adicionando evento que exibe informações quando o usuário toca no marcador
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  getColor() {
    if (this.nextColor == this.colors.length){
      this.nextColor = 0;
    }
    let color = this.colors[this.nextColor];
    this.nextColor = this.nextColor + 1;
    return color;
  }

  startTracking(){
    // this.locationTracker.startTracking(this.user._user[0]).then(result => {
    //   //this.atendimentosList =  result;
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
