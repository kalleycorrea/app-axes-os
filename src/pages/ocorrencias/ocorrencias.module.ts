import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OcorrenciasPage } from './ocorrencias';

@NgModule({
  declarations: [
    OcorrenciasPage,
  ],
  imports: [
    IonicPageModule.forChild(OcorrenciasPage),
  ],
})
export class OcorrenciasPageModule {}
