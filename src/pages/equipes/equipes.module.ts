import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquipesPage } from './equipes';
import { EquipeFilterPipe } from '../../pipes/equipe-filter/equipe-filter';

@NgModule({
  declarations: [
    EquipesPage,
    EquipeFilterPipe,
  ],
  imports: [
    IonicPageModule.forChild(EquipesPage),
  ],
  exports: [
    EquipesPage
  ]
})
export class EquipesPageModule {}
