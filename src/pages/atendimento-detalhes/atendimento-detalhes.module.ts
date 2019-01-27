import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtendimentoDetalhesPage } from './atendimento-detalhes';

@NgModule({
  declarations: [
    AtendimentoDetalhesPage,
  ],
  imports: [
    IonicPageModule.forChild(AtendimentoDetalhesPage),
  ],
  exports: [
    AtendimentoDetalhesPage
  ]
})
export class AtendimentoDetalhesPageModule {}
