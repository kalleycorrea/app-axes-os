import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { Atendimentos } from '../../providers';
//import { User } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-ocorrencias',
  templateUrl: 'ocorrencias.html',
})
export class OcorrenciasPage {
  item: any;
  account: { usuario: any; senha: any; tipo: any; grupo: any };
  ocorrencias: any[];
  private saveErrorString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public atendimentos: Atendimentos
    //, public user: User
    ) {
      this.item = navParams.get('item');
      this.account = navParams.get('account');

      this.saveErrorString = "Não foi possível salvar os dados. Por favor tente novamente.";
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad OcorrenciasPage');
  }

  ionViewDidEnter() {
    let data: { usuario: any; senha: any; numAtendimento: any; } = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      numAtendimento: this.item['NumAtendimento']
    };
    this.ocorrencias = this.atendimentos.getOcorrencias(data);
  }

  addItem() {

    this.navCtrl.push('OcorrenciaCreatePage', {
      atendimento: this.item['NumAtendimento'],
      account: this.account
    });

    // let addModal = this.modalCtrl.create('OcorrenciaCreatePage', {
    //   atendimento: this.item['NumAtendimento'],
    //   account: this.account
    // });
    // addModal.onDidDismiss(dataform => {
    //   if (dataform) {
    //     //this.atendimentos.add(item);
    //     //this.ocorrencias.push(item);

    //     let data: { usuario: any; senha: any; numAtendimento: any; descricao: any} = {
    //       usuario: this.account['usuario'],
    //       senha: this.account['senha'],
    //       numAtendimento: this.item['NumAtendimento'],
    //       descricao: dataform['descricao']
    //     };

    //     this.atendimentos.addOcorrencia(data).subscribe(
    //       resp => {
    //         console.log('Ocorrência Inserida');
    //       },
    //       err => {
    //         // Unable to save
    //         let toast = this.toastCtrl.create({
    //           message: this.saveErrorString,
    //           duration: 2000,
    //           position: "bottom",
    //           cssClass: "toastCustomStyles"
    //         });
    //         toast.present();
    //       }
    //     );

    //   }
    // })
    // addModal.present();
  }
}
