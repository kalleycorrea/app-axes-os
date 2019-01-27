import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, Events } from 'ionic-angular';

import { Atendimento } from '../../models/atendimento';
import { Atendimentos } from '../../providers';
import { User } from '../../providers';
import { MainPage, DetailPage } from '../../pages';

@IonicPage()
@Component({
  selector: 'page-atendimentos',
  templateUrl: 'atendimentos.html',
})
export class AtendimentosPage {
  //rootPage = MainPage;
  currentItems: Atendimento[];

  account: { usuario: any; senha: any; tipo: any; grupo: any } = {
    usuario: '',
    senha: '',
    tipo: '',
    grupo: ''
  };

  constructor(public navCtrl: NavController,
    public atendimentos: Atendimentos,
    public user: User,
    //public events: Events,
    public modalCtrl: ModalController) {

    //if (typeof var_array !== 'undefined' && var_array.length > 0)
    // the array is defined and has at least one element

    this.account = {
      "usuario": this.user._user[0]['usuario'],
      "senha": this.user._user[0]['senha'],
      "tipo": this.user._user[0]['tipo'],
      "grupo": this.user._user[0]['idgrupo']
    };
    //this.account.usuario = this.user._user[0]['usuario']; //outra forma de atualizar o objeto

    //this.currentItems = this.atendimentos.query(account);
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
  }

  ionViewDidEnter() {
    this.currentItems = this.atendimentos.getAtendimentos(this.account);
    //this.updateTabBadgeAtendimentos();
  }

  // deleteItem(atendimento) {
  //   this.atendimentos.delete(atendimento);
  // }

  /**
   * Navega para a página de detalhes do atendimento
   */
  openItem(atendimento: Atendimento) {
    //this.navCtrl.push('AtendimentoDetalhesPage', {
    //  atendimento: atendimento
    //});
    //setRoot
    this.navCtrl.push(DetailPage, {
      item: atendimento,
      account: this.account
    });
  }

  //public updateTabBadgeAtendimentos(): void {
  //  this.events.publish('updatedTabBadge:atendimentos', this.currentItems.length);
  //}
}
