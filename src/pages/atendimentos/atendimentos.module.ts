import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtendimentosPage } from './atendimentos';
import { IonTextAvatar } from 'ionic-text-avatar';

@NgModule({
  declarations: [
    AtendimentosPage,
    IonTextAvatar
  ],
  imports: [
    IonicPageModule.forChild(AtendimentosPage),
  ],
  exports: [
    AtendimentosPage
  ]
})
export class AtendimentosPageModule {}
