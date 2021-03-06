import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Button, Tabs } from 'ionic-angular';
import { Atendimentos } from '../../providers';
import { MainPage } from "../";

@IonicPage()
@Component({
  selector: 'page-check-list',
  templateUrl: 'check-list.html',
})
export class CheckListPage {
  item: any;
  account: { usuario: any; senha: any; tipo: any; grupo: any };
  data: { usuario: any; senha: any; numAtendimento: any; tipoAtendimento: any; grupo: any; topico: any };
  checkList: any[];
  mtbf: { id: any; valor: boolean } = { id: '', valor: false };
  grupoUsuarios: any[];
  usuarios: any[];
  atendimentoCausas: any[];
  //grupoDesignado: any;
  //usuarioDesignado: any;
  UltimoUsuarioDesignado: any;
  causa: any;
  solucao: any;
  showSegment: any;
  private saveErrorString: string;
  tabsMainPage: Tabs;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController,
    public atendimentos: Atendimentos) {

      this.item = navParams.get('item');
      this.account = navParams.get('account');
      this.saveErrorString = "Não foi possível salvar os dados. Por favor tente novamente.";
      this.UltimoUsuarioDesignado = this.item.Usu_Designado;
      this.tabsMainPage = this.navCtrl.parent.parent.parent;

      this.data = {
        usuario: this.account['usuario'],
        senha: this.account['senha'],
        numAtendimento: this.item['NumAtendimento'],
        tipoAtendimento: this.item['Tipo'],
        grupo: '',
        topico: this.item['Topico'],
      };
  }

  ionViewDidEnter() {
    this.data = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      numAtendimento: this.item['NumAtendimento'],
      tipoAtendimento: this.item['Tipo'],
      grupo: (this.item.Grupo_Designado) ? this.item.Grupo_Designado : '',
      topico: this.item['Topico'],
    };
    Promise.all([
      this.checkList = this.atendimentos.getCheckList(this.data),
      this.mtbf = this.atendimentos.getMTBF(this.data),
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

  reloadMTBF(){
    this.data = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      numAtendimento: this.item['NumAtendimento'],
      tipoAtendimento: this.item['Tipo'],
      grupo: (this.item.Grupo_Designado) ? this.item.Grupo_Designado : '',
      topico: this.item['Topico'],
    };
    Promise.all([
      this.mtbf = this.atendimentos.getMTBF(this.data),
    ]).then();
  }

  changeGrupo() {
    this.data = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      numAtendimento: this.item['NumAtendimento'],
      tipoAtendimento: this.item['Tipo'],
      grupo: (this.item.Grupo_Designado) ? this.item.Grupo_Designado : '',
      topico: this.item['Topico'],
    };
    this.usuarios = this.atendimentos.getUsuarios(this.data);
  }

  saveCheckList() {
    let strChecklist: string = '';
    let descChecklist: string = '';
    for (let item of this.checkList) {
      if (item.Checked == true) {
        strChecklist = strChecklist + item.Id + ';'
        descChecklist = descChecklist + item.Descricao + '; '
      }
    }
    strChecklist = strChecklist.substr(0, strChecklist.length-1);
    descChecklist = descChecklist.substr(0, descChecklist.length-2);

    let data: { usuario: any; senha: any; numAtendimento: any; strChecklist: any; descChecklist: any;
      mtbfObrigatorio: any; idMTBF: any; valorMTBF: any } = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      numAtendimento: this.item.NumAtendimento,
      strChecklist: strChecklist,
      descChecklist: descChecklist,
      mtbfObrigatorio: this.item.MTBFObrigatorio,
      idMTBF: (this.item.MTBFObrigatorio == 'N') ? '' : this.mtbf.id,
      valorMTBF: (this.item.MTBFObrigatorio == 'N') ? '' : ((this.mtbf.valor == true) ? 'S' : 'N')
    };

    this.atendimentos.saveCheckList(data).subscribe(
      resp => {
        // success
        let toast = this.toastCtrl.create({
          message: "Concluído",
          duration: 1500,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        this.reloadMTBF();
        toast.present();
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
      }
    );
  }

  saveDesignacao() {
    if ((this.item.Grupo_Designado==undefined || this.item.Grupo_Designado=='') &&
    (this.item.Usu_Designado==undefined || this.item.Usu_Designado=='')) {
      alert('Selecione o Grupo e/ou Usuário para designar o atendimento');
      return;
    }

    let data: { usuario: any; senha: any; numAtendimento: any; grupoDesignado: any; usuarioDesignado: any;
      UltimoUsuarioDesignado: any; topico: any; situacaoOS: any; } = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      numAtendimento: this.item.NumAtendimento,
      grupoDesignado: this.item.Grupo_Designado,
      usuarioDesignado: this.item.Usu_Designado,
      UltimoUsuarioDesignado: this.UltimoUsuarioDesignado,
      topico: this.item.Topico,
      situacaoOS: this.item.SituacaoOS
    };

    this.atendimentos.saveDesignacao(data).subscribe(
      resp => {
        // success
        let toast = this.toastCtrl.create({
          message: "Concluído",
          duration: 1500,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();
        this.tabsMainPage.select(0);
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
      }
    );
  }

  saveEncerramento() {
    if (this.causa==undefined || this.causa=='') {
      alert('Selecione a CAUSA desse atendimento');
      return;
    }

    if (this.solucao==undefined || this.solucao=='') {
      alert('Informe a SOLUÇÃO desse atendimento');
      return;
    }

    for (let item of this.checkList) {
      if (!item.Checked || item.Checked == false || item.Checked == 'false') {
        alert('Faça o CheckList antes de encerrar o atendimento');
        return;
      }
    }

    let data: { usuario: any; senha: any; numAtendimento: any; causa: any; solucao: any;
      topico: any; situacaoOS: any; usuarioDesignado: any } = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      numAtendimento: this.item.NumAtendimento,
      causa: this.causa,
      solucao: this.solucao,
      topico: this.item.Topico,
      situacaoOS: this.item.SituacaoOS,
      usuarioDesignado: (this.item.Usu_Designado==undefined || this.item.Usu_Designado=='' || this.item.Usu_Designado==0) ? this.account['usuario'] : this.item.Usu_Designado
    };

    this.atendimentos.saveEncerramento(data).subscribe(
      resp => {
        // success
        let toast = this.toastCtrl.create({
          message: "Concluído",
          duration: 1500,
          position: "bottom",
          cssClass: "toastCustomStyles"
        });
        toast.present();
        this.tabsMainPage.select(0);
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
      }
    );
  }
}
