import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { Atendimentos } from '../../providers';

declare var google;

@IonicPage()
@Component({
  selector: 'page-rota',
  templateUrl: 'rota.html',
})
export class RotaPage {
  @ViewChild('map') mapElement: ElementRef;
  item: any;
  account: { usuario: any; senha: any; tipo: any; grupo: any };
  mapaImagem: string;
  directionsService = new google.maps.DirectionsService();
  // suppressMarkers: Remove os dois marcadores criados automaticamente na criação da rota
  directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
  map: any;
  startPosition: any;
  originPosition: any;
  destinationPosition: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private geolocation: Geolocation, public toastCtrl: ToastController, public atendimentos: Atendimentos) {
      this.item = navParams.get('item');
      this.account = navParams.get('account');
  }

  ionViewDidLoad() {
    //this.initializeMap();
  }

  ionViewDidEnter() {
    this.initializeMap();

    //this.mapaImagem = this.getMapaImagem();

    // const position = new google.maps.LatLng(-3.08907235, -60.06175697); //Sede Axes
    // const mapOptions = {
    //   zoom: 18,
    //   center: position,
    //   //disableDefaultUI: false,
    //   mapTypeId: 'roadmap' //roadmap, satellite, hybrid, terrain
    // }
    // this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // const marker = new google.maps.Marker({
    //   position: position,
    //   map: this.map,
    //   title: this.item['Apelido'],
    //   //animation: google.maps.Animation.DROP, //BOUNCE
    //   //icon: 'assets/imgs/logo.png',
    //   //icon: 'https://rbx.axes.com.br/routerbox/file/img/perfil_routerbox.jpg',
    // })
  }

  private getEnderecoCliente(){
    return this.item['Endereco'] + ', ' + this.item['Numero'] + ' - ' + this.item['Bairro'] + ', ' +
    this.item['Cidade'] + ' - ' + this.item['Estado'];
  }

  //Static Map
  private getMapaImagem(){
    return 'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=600x300&markers=color:blue|'
    + this.getEnderecoCliente()
    + '&key=AIzaSyDZ_AN1_M-9woJt4d4OV8h_N5G_7rX-ibw';
  }

  initializeMap() {
    this.getStartPosition();
    this.destinationPosition = new google.maps.LatLng(this.item['MapsLat'], this.item['MapsLng']);
    this.originPosition = this.startPosition;

    const mapOptions = {
      zoom: 18,
      center: this.startPosition,
      disableDefaultUI: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP //roadmap, satellite, hybrid, terrain
    }

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    // Usando @ViewChild para lozalzar o elemento html
    //this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.directionsDisplay.setMap(this.map);

    this.addMarkerCustomLabel(this.originPosition, 'T'); //Posição do técnico
    this.addMarkerCustomLabelAndIcon(this.destinationPosition, 'C'); //Posição do cliente

    // const marker = new google.maps.Marker({
    //   position: this.destinationPosition,
    //   //position: this.map.getCenter()
    //   map: this.map,
    //   title: this.item['Apelido'],
    //   animation: google.maps.Animation.DROP, //BOUNCE
    // });
    this.calculateRoute();
  }

  getStartPosition() {
    // Pega a posição atual do dispositivo
    this.geolocation.getCurrentPosition()
    .then((resp) => {
      this.startPosition = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
      // Em caso de erro, define a sede da Axes como posição inicial
      this.startPosition = new google.maps.LatLng(-3.08907235, -60.06175697); //Sede Axes
    });
  }

  addMarker(position: any, tipo: string) {
    let marker = new google.maps.Marker({
      map: this.map,
      //position: this.map.getCenter(),
      position: position,
      //label: (tipo == 'T') ? this.item['Equipe'] : this.item['Apelido'],
      title: (tipo == 'T') ? this.item['Equipe'] : this.item['Apelido'],
      icon: (tipo == 'T') ? 'assets/img/car.png' : 'assets/img/people.png',
      animation: google.maps.Animation.DROP,
      draggable: (tipo == 'T') ? true : false,
    });
    if (tipo == 'C') {
      let infoMarker = `<h4>${this.item['Apelido']}</h4><br>>${this.item['Topico']}`;
      this.addInfoWindow(marker, infoMarker);
    }
  }

  addMarkerCustomLabel(position: any, tipo: string) {
    let marker = new google.maps.Marker({
      map: this.map,
      position: position,
      label: {
        color: 'blue',
        fontWeight: 'bold',
        text: (tipo == 'T') ? this.item['Equipe'] : this.item['Apelido'],
      },
      // icon: {
      //   labelOrigin: new google.maps.Point(11, 50),
      //   size: new google.maps.Size(22, 40),
      //   origin: new google.maps.Point(0, 0),
      //   anchor: new google.maps.Point(11, 40),
      // },
      animation: google.maps.Animation.DROP,
      draggable: (tipo == 'T') ? true : false,
    });
    if (tipo == 'C') {
      let infoMarker = `<h4>${this.item['Apelido']}</h4><br>>${this.item['Topico']}`;
      this.addInfoWindow(marker, infoMarker);
    }
  }

  // Adiciona o label do Marcador abaixo do ícone
  addMarkerCustomLabelAndIcon(position: any, tipo: string) {
    let marker = new google.maps.Marker({
      map: this.map,
      position: position,
      label: {
        color: 'blue',
        fontWeight: 'bold',
        text: (tipo == 'T') ? this.item['Equipe'] : this.item['Apelido'],
      },
      icon: {
        labelOrigin: new google.maps.Point(11, 50),
        url: (tipo == 'T') ? 'assets/img/car.png' : 'assets/img/people.png',
        size: new google.maps.Size(22, 40),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(11, 40),
      },
      animation: google.maps.Animation.DROP,
      draggable: (tipo == 'T') ? true : false,
    });
    if (tipo == 'C') {
      let infoMarker = `<h4>${this.item['Apelido']}</h4><br>>${this.item['Topico']}`;
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

  calculateRoute() {
    if (this.destinationPosition && this.originPosition) {
      const request = {
        // Pode ser uma coordenada (LatLng), uma string ou um lugar
        origin: this.originPosition,
        destination: this.destinationPosition,
        travelMode: 'DRIVING'
      };

      this.traceRoute(this.directionsService, this.directionsDisplay, request);
    }
  }

  traceRoute(service: any, display: any, request: any) {
    service.route(request, function (result, status) {
      if (status == 'OK') {
        display.setDirections(result);
      }
    });
  }

  saveEnderecoInstalacao() {
    this.geolocation.getCurrentPosition()
      .then((resp) => {

        let data: any = {
          usuario: this.account['usuario'],
          senha: this.account['senha'],
          operacao: (this.item.PossuiEnderecoInstalacao == 'N') ? 'insert' : 'update',
          cliente: this.item.CodCliente,
          contrato: this.item.Contrato,
          tipo: 'I',
          cobranca: 'N',
          pais: 'Brasil',
          endereco: this.item.Endereco,
          numero: this.item.Numero,
          bairro: this.item.Bairro,
          complemento: this.item.Complemento,
          cidade: this.item.Cidade,
          uf: this.item.Estado,
          cep: this.item.CEP,
          mapsLat: resp.coords.latitude,
          mapsLng: resp.coords.longitude,
        };

        this.atendimentos.saveEnderecoInstalacao(data).subscribe(
          resp => {
            // success
            this.item['PossuiEnderecoInstalacao'] = 'S';

            // Salva uma ocorrência
            let ccorrencia: { usuario: any; senha: any; numAtendimento: any; descricao: any} = {
              usuario: this.account['usuario'],
              senha: this.account['senha'],
              numAtendimento: this.item['NumAtendimento'],
              descricao: `Endereço de instalação do contrato ${this.item['Contrato']} foi atualizado.`
            };

            this.atendimentos.addOcorrencia(ccorrencia).subscribe(
              resp => { },
              err => { }
            );

            // Show toast
            let toast = this.toastCtrl.create({
              message: "Dados Salvos",
              duration: 2000,
              position: "bottom",
              cssClass: "toastCustomStyles"
            });
            toast.present();
          },
          err => {
            // Unable to save
            let toast = this.toastCtrl.create({
              message: "Não foi possível salvar os dados. Por favor tente novamente.",
              duration: 3000,
              position: "bottom",
              cssClass: "toastCustomStyles"
            });
            toast.present();
          }
      );

      }).catch((error) => {
        // Unable to save
        let toast = this.toastCtrl.create({
          message: "Erro ao obter a localização",
          duration: 3000,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();
      });
  }
}
