import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OcorrenciaCreatePage } from './ocorrencia-create';

@NgModule({
  declarations: [
    OcorrenciaCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(OcorrenciaCreatePage),
  ],
})
export class OcorrenciaCreatePageModule {}
