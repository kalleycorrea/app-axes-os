import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Tab1RootDetail, Tab2RootDetail, Tab3RootDetail, Tab4RootDetail, Tab5RootDetail,
  Tab6RootDetail, Tab7RootDetail } from '../';
import { Atendimentos } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-tabs-detail',
  templateUrl: 'tabs-detail.html',
})
export class TabsDetailPage {
  tab1Root: any = Tab1RootDetail;
  tab2Root: any = Tab2RootDetail;
  tab3Root: any = Tab3RootDetail;
  tab4Root: any = Tab4RootDetail;
  tab5Root: any = Tab5RootDetail;
  tab6Root: any = Tab6RootDetail;
  tab7Root: any = Tab7RootDetail;
  params: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public atendimentos: Atendimentos) {
    this.params = navParams.data;
  }
}
