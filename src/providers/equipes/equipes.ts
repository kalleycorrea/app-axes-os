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

  add(equipe: any) {
    this.equipes.push(equipe);
  }

  delete(equipe: any) {
    this.equipes.splice(this.equipes.indexOf(equipe), 1);
  }
}
