import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { Equipes, Atendimentos } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-equipe-create',
  templateUrl: 'equipe-create.html',
})
export class EquipeCreatePage {
  equipe: any;
  usuarios: any;
  usuariosSelect: any[];
  account: { usuario: any; senha: any; tipo: any; grupo: any };
  usuarioSelected: any;
  showDivAdd: boolean = false;
  isReadyToSave: boolean = false;
  private saveErrorString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, public modalCtrl: ModalController,
    public equipes: Equipes, public atendimentos: Atendimentos) {

      this.equipe = navParams.get('equipe');
      this.usuarios = navParams.get('usuarios');
      this.account = navParams.get('account');
      this.usuarioSelected = '';
      this.showDivAdd = false;
      this.isReadyToSave = false;
      this.saveErrorString = "Não foi possível salvar os dados. Por favor tente novamente.";
  }

  ionViewDidLoad() {}

  ionViewDidEnter() {
    // let data = {
    //   usuario: this.account['usuario'],
    //   senha: this.account['senha'],
    //   // grupo: '1,4',
    // };
    //this.usuariosSelect = this.equipes.getUsuariosSemEquipe(data);
    // this.usuarios.forEach(user => {
    //   this.usuariosSelect.splice(this.usuariosSelect['Nome'].indexOf(user.usuario), 1);
    // });
  }

  showNewUsuario() {
    this.showDivAdd = true;
    this.usuarioSelected = '';
    this.isReadyToSave = false;
    let data = {
      usuario: this.account['usuario'],
      senha: this.account['senha']
    };
    this.usuariosSelect = this.equipes.getUsuariosSemEquipe(data);
  }

  cancel() {
    this.usuarioSelected = '';
    this.isReadyToSave = false;
    this.showDivAdd = false;
  }

  changeUsuario() {
    if (this.usuarioSelected.trim() !== '') {
      this.isReadyToSave = true;
    } else {
      this.isReadyToSave = false;
    }
  }

  addUsuarioEquipe() {
    let data: { usuario: any; senha: any; membro: any; idEquipe: any } = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      membro: this.usuarioSelected,
      idEquipe: this.equipe.id
    };

    this.equipes.addUsuarioEquipe(data).subscribe(
      resp => {
        // success
        let toast = this.toastCtrl.create({
          message: "Usuário Adicionado na Equipe",
          duration: 2000,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();

        this.usuarioSelected = '';
        this.showDivAdd = false;
        this.isReadyToSave = false;
        this.equipes.getUsuariosEquipe(this.account).then(result => {
          this.usuarios = result.filter(user => user.equipe == this.equipe.id);
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

  deleteUsuarioEquipe(user: any) {
    let data: { usuario: any; senha: any; membro: any } = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      membro: user.usuario
    };

    this.equipes.deleteUsuarioEquipe(data).subscribe(
      resp => {
        // success
        let toast = this.toastCtrl.create({
          message: "Usuário Removido da Equipe",
          duration: 2000,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();

        this.equipes.getUsuariosEquipe(this.account).then(result => {
          this.usuarios = result.filter(user => user.equipe == this.equipe.id);
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

}
