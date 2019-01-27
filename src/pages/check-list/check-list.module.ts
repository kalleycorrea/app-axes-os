import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckListPage } from './check-list';

@NgModule({
  declarations: [
    CheckListPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckListPage),
  ],
})
export class CheckListPageModule {}
