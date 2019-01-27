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
  @ViewChild('fileInput') fileInput;
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
  form: FormGroup;
  isReadyToSave: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    formBuilder: FormBuilder, public camera: Camera, public toastCtrl: ToastController, public atendimentos: Atendimentos) {
      this.item = navParams.get('item');
      this.account = navParams.get('account');

      this.form = formBuilder.group({
        photo: ['', Validators.required],
        descricao: ['', Validators.required]
      });

      // Watch the form for changes, and
      this.form.valueChanges.subscribe((v) => {
        this.isReadyToSave = this.form.valid;
      });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AnexoPage');
  }

  getPicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    const options2: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 96,
      targetHeight: 96
    }

    if (Camera['installed']()) {
      this.camera.getPicture(options2).then((data) => {
        this.form.patchValue({ 'photo': 'data:image/jpeg;base64,' + data });
      }, (err) => {
        alert('Não é possível tirar foto');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'photo': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['photo'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  save() {
    if (!this.form.valid) { return; }
    //this.viewCtrl.dismiss(this.form.value);
  }
}
