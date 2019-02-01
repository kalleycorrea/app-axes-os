import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AssinaturaPage } from './assinatura';
import { SignaturePadModule } from 'angular2-signaturepad';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    AssinaturaPage,
  ],
  imports: [
    SignaturePadModule,
    StarRatingModule,
    IonicPageModule.forChild(AssinaturaPage),
  ],
  exports: [
    AssinaturaPage
  ]
})
export class AssinaturaPageModule {}
