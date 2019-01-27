import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosTecnicosPage } from './dados-tecnicos';

@NgModule({
  declarations: [
    DadosTecnicosPage,
  ],
  imports: [
    IonicPageModule.forChild(DadosTecnicosPage),
  ],
})
export class DadosTecnicosPageModule {}
