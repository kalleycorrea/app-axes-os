import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquipesPage } from './equipes';
// import { EquipeFilterPipe } from '../../pipes/equipe-filter/equipe-filter';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    EquipesPage,
    // EquipeFilterPipe,
  ],
  imports: [
    IonicPageModule.forChild(EquipesPage),
    PipesModule
  ],
  exports: [
    EquipesPage
  ]
})
export class EquipesPageModule {}
