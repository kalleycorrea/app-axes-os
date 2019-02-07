import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquipesPage } from './equipes';

@NgModule({
  declarations: [
    EquipesPage,
  ],
  imports: [
    IonicPageModule.forChild(EquipesPage),
  ],
  exports: [
    EquipesPage
  ]
})
export class EquipesPageModule {}
