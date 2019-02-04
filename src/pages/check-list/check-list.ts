import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Button } from 'ionic-angular';
import { Atendimentos } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-check-list',
  templateUrl: 'check-list.html',
})
export class CheckListPage {
  item: any;
  account: { usuario: any; senha: any; tipo: any; grupo: any };
  data: { usuario: any; senha: any; numAtendimento: any; tipoAtendimento: any; grupo: any };
  checkList: any[];
  grupoUsuarios: any[];
  usuarios: any[];
  atendimentoCausas: any[];
  grupoDesignacao: any;
  usuarioDesignacao: any;
  causa: any;
  solucao: any;
  showSegment: any;
  private saveErrorString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController,
    public atendimentos: Atendimentos) {

      this.item = navParams.get('item');
      this.account = navParams.get('account');
      this.saveErrorString = "Não foi possível salvar os dados. Por favor tente novamente.";

      this.data = {
        usuario: this.account['usuario'],
        senha: this.account['senha'],
        numAtendimento: this.item['NumAtendimento'],
        tipoAtendimento: this.item['Tipo'],
        grupo: ''
      };
  }

  ionViewDidEnter() {
    this.data = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      numAtendimento: this.item['NumAtendimento'],
      tipoAtendimento: this.item['Tipo'],
      grupo: (this.grupoDesignacao) ? this.grupoDesignacao : '',
    };
    Promise.all([
      this.checkList = this.atendimentos.getCheckList(this.data),
      this.grupoUsuarios = this.atendimentos.getGrupoUsuarios(this.data),
      this.usuarios = this.atendimentos.getUsuarios(this.data),
      this.atendimentoCausas = this.atendimentos.getAtendimentoCausas(this.data),
    ]).then(value => this.showSegment = "checklist");
    // this.checkList = this.atendimentos.getCheckList(this.data);
    // setTimeout(() => { console.log("wait"); }, 2000);
    // this.showSegment = "checklist";
    // this.grupoUsuarios = this.atendimentos.getGrupoUsuarios(this.data);
    // this.usuarios = this.atendimentos.getUsuarios(this.data);
  }

  changeGrupo() {
    this.data = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      numAtendimento: this.item['NumAtendimento'],
      tipoAtendimento: this.item['Tipo'],
      grupo: (this.grupoDesignacao) ? this.grupoDesignacao : '',
    };
    this.usuarios = this.atendimentos.getUsuarios(this.data);
  }

  saveCheckList() {

  }

  saveDesignacao() {

  }

  saveEncerramento() {

  }
}
