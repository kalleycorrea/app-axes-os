import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';

import { User, Equipes } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-equipes',
  templateUrl: 'equipes.html',
})
export class EquipesPage {

  equipesList: any[];
  usuarios: any[];
  account: { usuario: any; senha: any; tipo: any; grupo: any; equipe: any; nomeequipe: any; filtroBusca: any } = {
    usuario: '',
    senha: '',
    tipo: '',
    grupo: '',
    equipe: '',
    nomeequipe: '',
    filtroBusca: ''
  };
  nomeEquipe: string='';
  showDivAdd: boolean = false;
  isReadyToSave: boolean = false;
  private saveErrorString: string;
  @ViewChild('inputnome') inputNomeEquipe;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public user: User, public equipes: Equipes,
    public toastCtrl: ToastController, public modalCtrl: ModalController) {

    this.account = {
      "usuario": this.user._user[0]['usuario'],
      "senha": this.user._user[0]['senha'],
      "tipo": this.user._user[0]['tipo'],
      "grupo": this.user._user[0]['idgrupo'],
      "equipe": this.user._user[0]['equipe'],
      "nomeequipe": this.user._user[0]['nomeequipe'],
      "filtroBusca": ''
    };
    this.nomeEquipe = '';
    this.showDivAdd = false;
    this.isReadyToSave = false;
    this.saveErrorString = "Não foi possível salvar os dados. Por favor tente novamente.";
  }

  ionViewDidLoad() {}

  ionViewWillEnter() {}

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

  showNewEquipe() {
    this.showDivAdd = true;
    this.nomeEquipe = '';
    this.isReadyToSave = false;
    // this.inputNomeEquipe.setFocus();
  }

  cancel() {
    this.nomeEquipe = '';
    this.isReadyToSave = false;
    this.showDivAdd = false;
  }

  changeNome() {
    if (this.nomeEquipe.trim() !== '') {
      this.isReadyToSave = true;
    } else {
      this.isReadyToSave = false;
    }
  }

  addEquipe() {
    let data: { usuario: any; senha: any; nomeEquipe: any } = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      nomeEquipe: this.nomeEquipe,
    };

    this.equipes.addEquipe(data).subscribe(
      resp => {
        // success
        let toast = this.toastCtrl.create({
          message: "Equipe Criada",
          duration: 2000,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();

        this.nomeEquipe ='';
        this.showDivAdd = false;
        this.isReadyToSave = false;
        this.equipesList.length = 0;
        this.equipes.getEquipes(this.account).then(result => {
          this.equipesList = result;
        });
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

  deleteEquipe(equipe) {
    let data: { usuario: any; senha: any; idEquipe: any } = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      idEquipe: equipe.id,
    };

    this.equipes.deleteEquipe(data).subscribe(
      resp => {
        // success
        let toast = this.toastCtrl.create({
          message: "Equipe Removida",
          duration: 2000,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();

        this.nomeEquipe ='';
        this.showDivAdd = false;
        this.isReadyToSave = false;
        this.equipesList.length = 0;
        this.equipes.getEquipes(this.account).then(result => {
          this.equipesList = result;
        });
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

  /**
   * Navega para a página de criação de Equipe
   */
  openEquipe(equipe: any) {
    this.navCtrl.push('EquipeCreatePage', {
      equipe: equipe,
      account: this.account,
      usuarios: this.usuarios.filter(usuario => usuario.equipe == equipe.id)
    });
  }
}
