import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Equipes } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-equipe-create',
  templateUrl: 'equipe-create.html',
})
export class EquipeCreatePage {
  equipe: any;
  usuarios: any;
  account: { usuario: any; senha: any; tipo: any; grupo: any };
  private saveErrorString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public equipes: Equipes,
    public toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.equipe = navParams.get('equipe');
    this.usuarios = navParams.get('usuarios');
    this.account = navParams.get('account');
    this.saveErrorString = "Não foi possível salvar os dados. Por favor tente novamente.";
  }

  ionViewDidLoad() {}

  ionViewDidEnter() {
  }

  deleteUsuario(usuario: any) {
    // this.equipes.delete(equipe);
  }

}
