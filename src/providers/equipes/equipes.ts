import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import { Api } from '../api/api';

/*
  Generated class for the Equipes provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Equipes {

  equipes: any[] = [];
  usuariosEquipe: any[] = [];
  usuariosSemEquipe: any[] = [];

  constructor(public api: Api) {}

  getEquipes(account: any) {
    let seq = this.api.post('getequipes', account).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response
      this.equipes.length = 0;
      if (res.length>0) {
        for (let item of res) {
          this.equipes.push(item);
        }
      }
    }, err => {
      console.error('ERROR', err);
    });
    // return this.equipes;
    return Promise.resolve(this.equipes);
  }

  getUsuariosEquipe(account: any) {
    let seq = this.api.post('getusuariosequipe', account).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response
      this.usuariosEquipe.length = 0;
      if (res.length>0) {
        for (let item of res) {
          this.usuariosEquipe.push(item);
        }
      }
    }, err => {
      console.error('ERROR', err);
    });
    // return this.usuariosEquipe;
    return Promise.resolve(this.usuariosEquipe);
  }

  addEquipe(data: any) {
    let seq = this.api.post('addequipe', data).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  deleteEquipe(data: any) {
    let seq = this.api.post('deleteequipe', data).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  getUsuariosSemEquipe(data: any) {
    let seq = this.api.post('getusuariossemequipe', data).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response
      this.usuariosSemEquipe.length = 0;
      if (res.length>0) {
        // o primeiro item da lista é uma opção em branco
        let itemVazio: { Nome: any } = {Nome: ''};
        this.usuariosSemEquipe.push(itemVazio);
        for (let item of res) {
          this.usuariosSemEquipe.push(item);
        }
      }
    }, err => {
      console.error('ERROR', err);
    });
    return this.usuariosSemEquipe;
  }

  addUsuarioEquipe(data: any) {
    let seq = this.api.post('addusuarioequipe', data).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  deleteUsuarioEquipe(data: any) {
    let seq = this.api.post('deleteusuarioequipe', data).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }
}
