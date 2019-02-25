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
  atendimentosList: Atendimento[];

  account: { usuario: any; senha: any; tipo: any; grupo: any; equipe: any; nomeequipe: any; filtroBusca: any } = {
    usuario: '',
    senha: '',
    tipo: '',
    grupo: '',
    equipe: '',
    nomeequipe: '',
    filtroBusca: ''
  };

  constructor(public navCtrl: NavController,
    public atendimentos: Atendimentos,
    public user: User,
    //public events: Events,
    public modalCtrl: ModalController
    ) {

    //if (typeof var_array !== 'undefined' && var_array.length > 0)
    // the array is defined and has at least one element

    this.account = {
      "usuario": this.user._user[0]['usuario'],
      "senha": this.user._user[0]['senha'],
      "tipo": this.user._user[0]['tipo'],
      "grupo": this.user._user[0]['idgrupo'],
      "equipe": this.user._user[0]['equipe'],
      "nomeequipe": this.user._user[0]['nomeequipe'],
      "filtroBusca": ''
    };
    //this.account.usuario = this.user._user[0]['usuario']; //outra forma de atualizar o objeto
    //this.atendimentosList = this.atendimentos.getAtendimentos(account);

    // var temp = this;
    // setTimeout(function() {
    //   temp.atendimentos.getAtendimentos(temp.account).then(result => {
    //     temp.atendimentosList =  result;
    //   });
    // }, 3000);
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
  }

  ionViewDidEnter() {
    // this.atendimentosList = this.atendimentos.getAtendimentos(this.account);

    // var temp = this;
    // setTimeout(function() {
    //   temp.atendimentos.getAtendimentos(temp.account).then(result => {
    //     temp.atendimentosList =  result;
    //   });
    // }, 3000);

    this.atendimentos.getAtendimentos(this.account).then(result => {
      this.atendimentosList =  result;
    });

    //this.updateTabBadgeAtendimentos();
  }

  doRefresh(refresher) {
    this.atendimentos.getAtendimentos(this.account).then((data) => {
      this.atendimentosList =  data;
      if(refresher != 0)
        //refresher.complete();
        setTimeout(() => {
          refresher.complete();
        }, 2000);
    });
  }

  // deleteItem(atendimento) {
  //   this.atendimentos.delete(atendimento);
  // }

  /**
   * Navega para a página de detalhes do atendimento
   */
  openAtendimento(atendimento: Atendimento) {
    //this.navCtrl.push('AtendimentoDetalhesPage', {
    //  atendimento: atendimento
    //});
    //setRoot
    this.navCtrl.push(DetailPage, {
      item: atendimento,
      account: this.account
    });
  }

  searchAtendimento(ev) {
    let val = ev.target.value;
    if (val && val.trim() != '' && val.length > 3) {
      this.account.filtroBusca = val;
      this.atendimentos.getAtendimentos(this.account).then(result => {
        this.atendimentosList =  result;
      });
    } else if (!val || val.trim() == '') {
      this.account.filtroBusca = '';
      this.atendimentos.getAtendimentos(this.account).then(result => {
        this.atendimentosList =  result;
      });
    }
  }

  //public updateTabBadgeAtendimentos(): void {
  //  this.events.publish('updatedTabBadge:atendimentos', this.atendimentosList.length);
  //}
}
