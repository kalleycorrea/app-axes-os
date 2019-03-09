import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Atendimentos } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-atendimento-detalhes',
  templateUrl: 'atendimento-detalhes.html',
})
export class AtendimentoDetalhesPage {
  item: any;
  itemAnterior: any;
  account: { usuario: any; senha: any; tipo: any; grupo: any };
  private saveErrorString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController,
    public atendimentos: Atendimentos
    //, public user: User
    ) {
    //this.item = navParams.get('item') || atendimentos.defaultAtendimento;
    //this.item = navParams.data;
    this.item = navParams.get('item');
    this.itemAnterior = Object.assign({}, this.item); //cópia do objeto
    this.account = navParams.get('account');
    this.saveErrorString = "Não foi possível salvar os dados. Por favor tente novamente.";
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AtendimentoDetalhesPage');
  }

  onSelectedSituacaoOS() {
    let data: { usuario: any; senha: any; numAtendimento: any; situacaoOS: any; situacaoOSAnterior: any } = {
      usuario: this.account.usuario,
      senha: this.account.senha,
      numAtendimento: this.item.NumAtendimento,
      situacaoOS: this.item.SituacaoOS,
      situacaoOSAnterior: this.itemAnterior['SituacaoOS']
    };

    this.atendimentos.updateSituacaoOS(data).subscribe(
      resp => {
        this.itemAnterior = Object.assign({}, this.item); //cópia do objeto
      },
      err => {
        // Unable to update
        let toast = this.toastCtrl.create({
          message: this.saveErrorString,
          duration: 2000,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();
      }
    );
  }

  onSelectedSituacaoAtendimento() {
    let data: { usuario: any; senha: any; numAtendimento: any; situacao: any } = {
      usuario: this.account.usuario,
      senha: this.account.senha,
      numAtendimento: this.item.NumAtendimento,
      situacao: this.item.SituacaoAtendimento
    };

    this.atendimentos.updateSituacaoAtendimento(data).subscribe(
      resp => {
        // success
      },
      err => {
        // Unable to update
        let toast = this.toastCtrl.create({
          message: this.saveErrorString,
          duration: 2000,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();
      }
    );
  }

  capturarAtendimento() {
    let data: { usuario: any; senha: any; numAtendimento: any; situacao: any } = {
      usuario: this.account.usuario,
      senha: this.account.senha,
      numAtendimento: this.item.NumAtendimento,
      situacao: this.item.SituacaoAtendimento
    };

    this.atendimentos.capturarAtendimento(data).subscribe(
      resp => {
        // success
        let toast = this.toastCtrl.create({
          message: "Concluído",
          duration: 1500,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();
      },
      err => {
        // Unable to update
        let toast = this.toastCtrl.create({
          message: this.saveErrorString,
          duration: 2000,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();
      }
    );
  }
}

