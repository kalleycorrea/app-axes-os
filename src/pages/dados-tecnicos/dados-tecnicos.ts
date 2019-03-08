import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Atendimentos } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-dados-tecnicos',
  templateUrl: 'dados-tecnicos.html',
})
export class DadosTecnicosPage {
  item: any;
  account: { usuario: any; senha: any; tipo: any; grupo: any };
  dadosAdicionais: any[];
  dadosSalvar: any[] = [];
  isChange: boolean;
  private saveErrorString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController,
    public atendimentos: Atendimentos) {

      this.item = navParams.get('item');
      this.account = navParams.get('account');

      this.saveErrorString = "Não foi possível salvar os dados. Por favor tente novamente.";
  }

  ionViewDidLoad() {
    this.isChange = false;
  }

  ionViewDidEnter() {
    let data: { usuario: any; senha: any; numAtendimento: any; } = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      numAtendimento: this.item['NumAtendimento']
    };
    this.dadosAdicionais = this.atendimentos.getDadosAdicionais(data);
    this.isChange = false;
  }

  getOptions(nomeCampo: any) {
    let result: any[];
    for (let campo of this.dadosAdicionais) {
      if (campo['Nome'] === nomeCampo){
        let lista = campo['Lista'];
        let arrayLista = lista.split(";");
        return arrayLista;
      }
    }
    return result;
  }

  change(campo: any) {
    this.isChange = true;
    // let item: any = {
    //   "CodigoCampo": campo.CodigoCampo,
    //   "Nome": campo.Nome,
    //   "Valor": campo.Valor,
    //   "Id": campo.Id
    // }
    // this.dadosSalvar.push(item);
  }

  save() {
    this.dadosSalvar.length = 0;
    let data: { usuario: any; senha: any; contrato: any } = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      contrato: this.item.Contrato
    };

    //let data = [...this.account, ...this.item, ...this.dadosAdicionais]; //Spread Operator

    // Adiciona as informações para autenticação
    //this.dadosAdicionais.push(data);
    this.dadosSalvar.push(data);

    // Adiciona os dados a serem salvos
    for (let campo of this.dadosAdicionais) {
      if (campo['Valor'] !== '' || campo['Id'] !== '') {
        let item: any = {
          "CodigoCampo": campo.CodigoCampo,
          "Nome": campo.Nome,
          "Valor": campo.Valor,
          "Id": campo.Id,
          "Tabela": campo.Tabela
        };
        this.dadosSalvar.push(item);
      }
    }

    this.atendimentos.saveDadosAdicionais(this.dadosSalvar).subscribe(
      resp => {
        // success
        let toast = this.toastCtrl.create({
          message: "Dados Salvos",
          duration: 1500,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();
        this.dadosSalvar.length = 0;
      },
      err => {
        // Unable to save
        let toast = this.toastCtrl.create({
          message: this.saveErrorString,
          duration: 2000,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();
        this.dadosSalvar.length = 0;
      }
    );
  }

  cancel() {
    this.ionViewDidEnter();
  }
}
