import { Component } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { Tab1Root, Tab2Root, Tab3Root, Tab4Root, Tab5Root } from '../';
import { Atendimentos } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  tab5Root: any = Tab5Root;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";
  tab5Title = " ";

  //public atendimentosCount: number = 0; //usada para o events

  // Solução com Observables/Subjects para atualizar o tabBadge da page AtendimentosPage (Atendimentos)
  atendimentosCount$: Observable<number>;

  constructor(public navCtrl: NavController, public atendimentos: Atendimentos
    //public events: Events,
    )
    {
      this.tab1Title = 'Atendimentos';
      this.tab2Title = 'Pesquisar';
      this.tab3Title = 'Equipes';
      this.tab4Title = 'Mapa';
      this.tab5Title = 'Configurações';

      //this.events.subscribe('updatedTabBadge:atendimentos', (count) => {
      //  this.atendimentosCount = count;
      //});
  }

  // Solução com Observables/Subjects para atualizar o tabBadge da page AtendimentosPage (Atendimentos)
  ngOnInit(){
    this.atendimentosCount$ = this.atendimentos.listSize;
  }
}
