import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
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

  signature = '';
  isDrawing = false;

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  private signaturePadOptions: Object = {
    'minWidth': 5,
    'canvasWidth': 400,
    'canvasHeight': 300,
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
    public atendimentos: Atendimentos) {
    this.item = navParams.get('item');
    this.account = navParams.get('account');
    this.saveErrorString = "Não foi possível salvar os dados. Por favor tente novamente.";
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AssinaturaPage');
  }

  ionViewDidEnter() {
    this.signaturePad.clear()
    // this.storage.get('savedSignature').then((data) => {
    //   this.signature = data;
    // });
  }

  drawComplete() {
    this.isDrawing = false;
  }

  drawStart() {
    this.isDrawing = true;
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
        let toast = this.toastCtrl.create({
          message: "Dados Salvos",
          duration: 2000,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();
        this.signaturePad.clear();
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

  clearPad() {
    this.signaturePad.clear();
  }

}
