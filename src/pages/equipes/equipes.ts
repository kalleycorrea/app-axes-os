import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';

import { User, Equipes } from '../../providers';
import { EquipeFilterPipe } from './../../pipes/equipe-filter/equipe-filter';

@IonicPage()
@Component({
  selector: 'page-equipes',
  templateUrl: 'equipes.html',
})
export class EquipesPage {

  equipesList: any[];
  usuarios: any[];
  currentUsuarios: any[] = [];
  account: { usuario: any; senha: any; tipo: any; grupo: any } = {
    usuario: '',
    senha: '',
    tipo: '',
    grupo: ''
  };
  private saveErrorString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public user: User, public equipes: Equipes,
    public toastCtrl: ToastController, public modalCtrl: ModalController) {

    this.account = {
      "usuario": this.user._user[0]['usuario'],
      "senha": this.user._user[0]['senha'],
      "tipo": this.user._user[0]['tipo'],
      "grupo": this.user._user[0]['idgrupo']
    };
    this.saveErrorString = "Não foi possível salvar os dados. Por favor tente novamente.";
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
  }

  ionViewDidEnter() {
    this.equipes.getEquipes(this.account).then(result => {
      this.equipesList = result;
    });

    this.equipes.getUsuariosEquipe(this.account).then(result => {
      this.usuarios = result;
    });
  }

  doRefresh(refresher) {
    this.equipes.getEquipes(this.account).then((data) => {
      this.equipesList =  data;
      if(refresher != 0)
        //refresher.complete();
        setTimeout(() => {
          refresher.complete();
        }, 2000);
    });
  }

  getUsuarios(idEquipe: any) {
    let finder = this.usuarios.filter(usu => usu.equipe == idEquipe);

    this.currentUsuarios.length = 0;
    if (finder.length>0) {
      for (let item of finder) {
        this.currentUsuarios.push(item);
      }
    }
  }

  addItem() {
    let addModal = this.modalCtrl.create('EquipeCreatePage');
    addModal.onDidDismiss(equipe => {
      if (equipe) {
        this.equipes.add(equipe);
      }
    })
    addModal.present();
  }

  deleteItem(equipe) {
    this.equipes.delete(equipe);
  }

  /**
   * Navega para a página de criação de Equipe
   */
  openItem(equipe: any) {
    this.navCtrl.push('EquipeCreatePage', {
      equipe: equipe,
      account: this.account
    });
  }
}
