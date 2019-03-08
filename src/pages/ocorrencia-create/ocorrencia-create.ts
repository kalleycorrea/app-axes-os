import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Atendimentos } from '../../providers';
import { DetailPage } from "../";

@IonicPage()
@Component({
  selector: 'page-ocorrencia-create',
  templateUrl: 'ocorrencia-create.html',
})
export class OcorrenciaCreatePage {
  atendimento: any;
  account: { usuario: any; senha: any; tipo: any; grupo: any };
  isReadyToSave: boolean;
  form: FormGroup;
  private saveErrorString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController, formBuilder: FormBuilder,
    public atendimentos: Atendimentos) {

      this.atendimento = navParams.get('atendimento');
      this.account = navParams.get('account');

      this.form = formBuilder.group({
        descricao: ['', Validators.required]
      });

      // Watch the form for changes, and
      this.form.valueChanges.subscribe((v) => {
        this.isReadyToSave = this.form.valid;
      });

      this.saveErrorString = "Não foi possível salvar os dados. Por favor tente novamente.";
  }

  ionViewDidLoad() {

  }

  //create() {
    // Método fictício para ser usado no (ngSubmit) do form
  //}

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) {
      return;
    }

    let data: { usuario: any; senha: any; numAtendimento: any; descricao: any} = {
      usuario: this.account['usuario'],
      senha: this.account['senha'],
      numAtendimento: this.atendimento,
      descricao: this.form.value['descricao']
    };

    this.atendimentos.addOcorrencia(data).subscribe(
      resp => {
        this.navCtrl.pop();
        //this.navCtrl.setRoot(DetailPage);
        //this.navCtrl.push(MainPage);
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

    // passa os valores do form de volta pra page que chamou o modal, nesse caso a "OcorrenciasPage"
    // porém não precisamos passar pra lá porque já estamos salvando no banco por aqui
    // e depois o ionViewDidEnter da "OcorrenciasPage" irá atualizar a lista de ocorrências
    //this.viewCtrl.dismiss(this.form.value);
  }

  create() {
  }
}
