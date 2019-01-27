import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsDetailPage } from './tabs-detail';

@NgModule({
  declarations: [
    TabsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsDetailPage),
  ],
  exports: [
    TabsDetailPage
  ]
})
export class TabsDetailPageModule {}
