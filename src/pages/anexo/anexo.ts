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
  novoAnexo: { imagem: string; descricao: string } = { imagem: "", descricao: "" };
  isReadyToSave: boolean;
  private saveErrorString: string;
  anexos: any[];
  // anexos: any[] = [
  //     {
  //       imagem: 'https://rbx.axes.com.br/routerbox/file/docarquivos/Screenshot_20190102-183729.png',
  //       descricao: 'Comprovante enviado pelo cliente'
  //     },
  //     {
  //       imagem: 'https://rbx.axes.com.br/routerbox/file/docarquivos/1467722999.png',
  //       descricao: 'Taxa de tráfego muito acima da banda contratada'
  //     }
  // ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController, formBuilder: FormBuilder,
    public camera: Camera, public toastCtrl: ToastController, public atendimentos: Atendimentos) {

      this.item = navParams.get('item');
      this.account = navParams.get('account');
      this.isReadyToSave = false;
      this.saveErrorString = "Não foi possível salvar os dados. Por favor tente novamente.";
  }

  ionViewDidLoad() {
    let data: { usuario: any; senha: any; numAtendimento: any; } = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      numAtendimento: this.item['NumAtendimento']
    };
    this.anexos = this.atendimentos.getAnexos(data);
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
    let currentDate: String = new Date().toISOString();
    currentDate = currentDate.replace(/-/g,"").replace(/:/g,"");

    let data: { usuario: any; senha: any; numAtendimento: any; base64Image: any; nomeArquivo: any; descricao: any } = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      numAtendimento: this.item.NumAtendimento,
      base64Image: this.novoAnexo.imagem.replace("data:image/jpeg;base64,", ""),
      nomeArquivo: currentDate + '.jpg',
      descricao: this.novoAnexo.descricao
    };

    this.atendimentos.addAnexos(data).subscribe(
      resp => {
        // success
        let toast = this.toastCtrl.create({
          message: "Dados Salvos",
          duration: 2000,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();
        this.anexos.push(this.novoAnexo);
        this.novoAnexo.imagem = "";
        this.novoAnexo.descricao = "";
        this.isReadyToSave = false;
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
