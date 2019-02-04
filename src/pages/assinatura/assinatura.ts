import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Events } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ScreenOrientation } from "@ionic-native/screen-orientation";
import { Atendimentos } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-assinatura',
  templateUrl: 'assinatura.html',
})
export class AssinaturaPage {
  item: any;
  account: { usuario: any; senha: any; tipo: any; grupo: any };
  private saveErrorString: string;
  private screenOrientation: ScreenOrientation;

  // Signature Pad
  signature = '';
  isDrawing = false;
  lengthSignature: number = 0;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  private signaturePadOptions: Object = {
    'minWidth': 0.5,
    'canvasWidth': 290,
    'canvasHeight': 360,
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };
  // Ionic3 Star Rating
  rating1: number = 4;
  descRating1: string;
  commentRating1: string = '';
  rating2: number = 4;
  descRating2: string;
  commentRating2: string = '';
  showRating1: boolean = false;
  showRating2: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, screenOrientation: ScreenOrientation,
    public toastCtrl: ToastController, public events: Events, public atendimentos: Atendimentos) {
    this.item = navParams.get('item');
    this.account = navParams.get('account');
    this.saveErrorString = "Não foi possível salvar os dados. Por favor tente novamente.";
    this.screenOrientation = screenOrientation;

    events.subscribe('star-rating:changed', (starRating) => {
      if (this.showRating1) {
        this.rating1 = starRating;
        this.descRating1 = this.getDescricaoRating(starRating);
      } else if (this.showRating2) {
        this.rating2 = starRating;
        this.descRating2 = this.getDescricaoRating(starRating);
      }
    });
    this.descRating1 = this.getDescricaoRating(this.rating1);
    this.descRating2 = this.getDescricaoRating(this.rating2);
  }

  ionViewDidLoad() {
    // this.screenOrientation.onChange().subscribe(() => this.canvasResize());
  }

  ionViewDidEnter() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    //this.signaturePad.clear();
    this.lengthSignature = 0;
    this.showRating1 = false;
    this.showRating2 = false;
    this.rating1 = 4;
    this.rating2 = 4;
    this.descRating1 = this.getDescricaoRating(this.rating1);
    this.descRating2 = this.getDescricaoRating(this.rating2);
    this.commentRating1 = '';
    this.commentRating2 = '';
  }

  ngAfterViewInit() {
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.signaturePad.clear();
    this.canvasResize();
  }

  ionViewDidLeave(){
    this.screenOrientation.unlock();
  }

  canvasResize() {
    let canvas = document.querySelector('canvas');
    this.signaturePad.set('minWidth', 0.5);
    this.signaturePad.set('canvasWidth', canvas.offsetWidth);
    this.signaturePad.set('canvasHeight', canvas.offsetHeight);
  }

  // canvasResize()
  // {
  //   let canvas = document.querySelector('canvas');
  //   var ratio = Math.max(window.devicePixelRatio || 1, 1);
  //   canvas.height = canvas.clientHeight * ratio;
  //   canvas.width = canvas.clientWidth * ratio;
  //   this.signaturePad.clear();
  // }

  drawComplete() {
    this.isDrawing = false;
    this.lengthSignature = this.signaturePad.toDataURL().length;
  }

  drawStart() {
    this.isDrawing = true;
    this.lengthSignature = this.signaturePad.toDataURL().length;
  }

  clearPad() {
    this.signaturePad.clear();
    this.lengthSignature = 0;
  }

  savePad() {
    this.signature = this.signaturePad.toDataURL("image/jpeg");

    let data: { usuario: any; senha: any; numAtendimento: any; base64Image: any } = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      numAtendimento: this.item.NumAtendimento,
      base64Image: this.signature.replace("data:image/jpeg;base64,", "").replace("data:image/png;base64,", "")
    };

    this.atendimentos.addAssinatura(data).subscribe(
      resp => {
        // success
        this.signaturePad.clear();
        this.signature = '';
        this.lengthSignature = 0;
        this.showRating1 = true;
      },
      err => {
        // Unable to save
        let toast = this.toastCtrl.create({
          message: this.saveErrorString,
          duration: 3000,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();
        this.showRating1 = false;
      }
    );
  }

  getDescricaoRating(valor: number) {
    let result = "";
    switch(valor) {
      case 1: {
        result = "Ruim";
        break;
      }
      case 2: {
        result = "Regular";
        break;
      }
      case 3: {
        result = "Bom";
        break;
      }
      case 4: {
        result = "Muito Bom";
        break;
      }
      case 5: {
        result = "Excelente";
        break;
      }
    }
    return result;
  }

  backRating () {
    this.showRating1 = true;
    this.showRating2 = false;
  }

  showNextRating () {
    this.showRating1 = false;
    this.showRating2 = true;
  }

  saveRating () {
    let data: { usuario: any; senha: any; numAtendimento: any;
      ratingAtendimento: any; commentRatingAtendimento: any; ratingProduto: any; commentRatingProduto: any } = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      numAtendimento: this.item.NumAtendimento,
      ratingAtendimento: this.rating1,
      commentRatingAtendimento: this.commentRating1,
      ratingProduto: this.rating2,
      commentRatingProduto: this.commentRating2
    };

    this.atendimentos.addRating(data).subscribe(
      resp => {
        // success
        let toast = this.toastCtrl.create({
          message: "Obrigado por sua ajuda!",
          duration: 2000,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();
        this.showRating1 = false;
        this.showRating2 = false;
      },
      err => {
        // Unable to save
        let toast = this.toastCtrl.create({
          message: this.saveErrorString,
          duration: 3000,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();
      }
    );
  }
}
