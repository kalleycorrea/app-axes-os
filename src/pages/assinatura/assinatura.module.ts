import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssinaturaPage } from './assinatura';
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  declarations: [
    AssinaturaPage,
  ],
  imports: [
    IonicPageModule.forChild(AssinaturaPage),
    SignaturePadModule
  ],
  exports: [
    AssinaturaPage
  ]
})
export class AssinaturaPageModule {}
