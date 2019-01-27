import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/share';

import { Api } from '../api/api';
import { Atendimento } from '../../models/atendimento';

@Injectable()
export class Atendimentos {
  //adicionei
  atendimentos: Atendimento[] = [];
  ocorrencias: any[] = [];
  dadosAdicionais: any[] = [];
  dadosAdicionaisVal: any[] = [];

  defaultAtendimento: any = {
    "NumAtendimento": "",
    "Protocolo": "",
    "CodCliente": "",
    "Cliente": "",
    "SiglaCliente": "",
    "Contrato": "",
    "Plano": "",
    "Topico": "",
    "Prioridade": "",
    "Assunto": "",
    "Solucao": "",
    "Abertura": "",
    "SLA": "",
    "GrupoCliente": "",
    "Endereco": "",
    "Numero": "",
    "Complemento": "",
    "Bairro": "",
    "CEP": "",
    "Cidade": "",
    "Estado": "",
    "MapsLat": "",
    "MapsLng": "",
    "Usu_Designado": "",
    "Grupo_Designado": "",
    "Situacao": "",
    "DescSituacao": "",
    "SituacaoOS": "0",
    "DescSituacaoOS": ""
  };

  // Solução com Observables/Subjects para atualizar o tabBadge da page AtendimentosPage (Atendimentos)
  private listSizeSubject: Subject<number>;
  private _listSize: Observable<number>;

  constructor(public api: Api) {
    // Solução com Observables/Subjects para atualizar o tabBadge da page AtendimentosPage (Atendimentos)
    this.listSizeSubject = new Subject();
    this._listSize = this.listSizeSubject.asObservable();
  }

  getAtendimentos(account: any) {
    //return this.api.get('/', account);
    //let seq = this.api.get('getatendimentos', account).share();
    let seq = this.api.post('getatendimentos', account).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response
      this.atendimentos.length = 0;
      if (res.length>0) {
        for (let item of res) {
          this.atendimentos.push(new Atendimento(item));
        }
      }
      // Solução com Observables/Subjects para atualizar o tabBadge da page AtendimentosPage (Atendimentos)
      this.updateItemsCount(res.length);
    }, err => {
      console.error('ERROR', err);
    });
    return this.atendimentos;
  }

  updateSituacaoOS(data: any) {
    let seq = this.api.post('updatesituacaoos', data).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  getOcorrencias(data: any) {
    let seq = this.api.post('getocorrencias', data).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response
      this.ocorrencias.length = 0;
      if (res.length>0) {
        for (let item of res) {
          this.ocorrencias.push(item);
        }
      }
    }, err => {
      console.error('ERROR', err);
    });
    return this.ocorrencias;
  }

  addOcorrencia(data: any) {
    let seq = this.api.post('addocorrencia', data).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  getDadosAdicionais(data: any) {
    let seq = this.api.post('getdadosadicionais', data).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response
      this.dadosAdicionais.length = 0;
      if (res.length>0) {
        for (let item of res) {
          this.dadosAdicionais.push(item);
        }
      }
    }, err => {
      console.error('ERROR', err);
    });
    return this.dadosAdicionais;
  }

  saveDadosAdicionais(data: any) {
    let seq = this.api.post('savedadosadicionais', data).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  saveEnderecoInstalacao(data: any) {
    let seq = this.api.post('saveenderecoinstalacao', data).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  add(item: Atendimento) {
  }

  delete(item: Atendimento) {
  }

  // Solução com Observables/Subjects para atualizar o tabBadge da page AtendimentosPage (Atendimentos)
  get listSize(){
    return this._listSize;
  }
  public updateItemsCount(count: number){
    this.listSizeSubject.next(count);//next method updates the stream value
  }

}
