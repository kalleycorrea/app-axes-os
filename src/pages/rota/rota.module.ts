import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RotaPage } from './rota';

@NgModule({
  declarations: [
    RotaPage,
  ],
  imports: [
    IonicPageModule.forChild(RotaPage),
  ],
})
export class RotaPageModule {}
