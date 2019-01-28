import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { CameraOptions } from '@ionic-native/camera';

import { Atendimentos } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-anexo',
  templateUrl: 'anexo.html',
})
export class AnexoPage {
  item: any;
  account: { usuario: any; senha: any; tipo: any; grupo: any };
  anexos: any[] = [
      {
        imagem: 'https://rbx.axes.com.br/routerbox/file/docarquivos/Screenshot_20190102-183729.png',
        descricao: 'Comprovante enviado pelo cliente'
      },
      {
        imagem: 'https://rbx.axes.com.br/routerbox/file/docarquivos/1467722999.png',
        descricao: 'Taxa de tráfego muito acima da banda contratada'
      }
  ];
  novoAnexo: { imagem: string; descricao: string } = { imagem: "", descricao: "" };
  isReadyToSave: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, formBuilder: FormBuilder,
    public camera: Camera, public toastCtrl: ToastController, public atendimentos: Atendimentos) {

      this.item = navParams.get('item');
      this.account = navParams.get('account');
      this.isReadyToSave = false;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AnexoPage');
  }

  getPicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      //targetWidth: 96,
      //targetHeight: 96,
      correctOrientation: true
    };

    if (Camera['installed']()) {
      this.camera.getPicture(options).then((imageData) => {
        this.novoAnexo.imagem = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        alert('Não é possível tirar foto');
      })
    } else {
      alert('Não é possível tirar foto');
    }
  }

  changeDescricao() {
    if (this.novoAnexo.imagem !== '' && this.novoAnexo.descricao.trim() !== '') {
      this.isReadyToSave = true;
    } else {
      this.isReadyToSave = false;
    }
  }

  save() {
    if (this.isReadyToSave) {
      return;
    }
  }

  cancel() {
    this.novoAnexo.imagem = "";
    this.novoAnexo.descricao = "";
    this.isReadyToSave = false;
  }

  // getPicture() {
  //   if (Camera['installed']()) {
  //     this.camera.getPicture({
  //       destinationType: this.camera.DestinationType.DATA_URL,
  //       targetWidth: 96,
  //       targetHeight: 96
  //     }).then((data) => {
  //       this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
  //     }, (err) => {
  //       alert('Unable to take photo');
  //     })
  //   } else {
  //     this.fileInput.nativeElement.click();
  //   }
  // }

  // processWebImage(event) {
  //   let reader = new FileReader();
  //   reader.onload = (readerEvent) => {

  //     let imageData = (readerEvent.target as any).result;
  //     this.form.patchValue({ 'profilePic': imageData });
  //   };

  //   reader.readAsDataURL(event.target.files[0]);
  // }

  // getProfileImageStyle() {
  //   return 'url(' + this.form.controls['profilePic'].value + ')'
  // }
}
