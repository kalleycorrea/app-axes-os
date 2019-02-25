import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Config, Nav, Platform } from 'ionic-angular';

import { FirstRunPage } from '../pages';
import { Settings } from '../providers';

@Component({
  templateUrl: 'app.html'
  // template: `<ion-menu [content]="content">
  //   <ion-header>
  //     <ion-toolbar>
  //       <ion-title>Pages</ion-title>
  //     </ion-toolbar>
  //   </ion-header>

  //   <ion-content>
  //     <ion-list>
  //       <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
  //         {{p.title}}
  //       </button>
  //     </ion-list>
  //   </ion-content>

  // </ion-menu>
  // <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Tabs', component: 'TabsPage' },
    { title: 'Login', component: 'LoginPage' },
    { title: 'Atendimentos', component: 'AtendimentosPage' },
    { title: 'Configurações', component: 'SettingsPage' },
    { title: 'Buscar', component: 'SearchPage' }
  ];

  constructor(platform: Platform, settings: Settings, private config: Config,
    private statusBar: StatusBar, private splashScreen: SplashScreen) {

      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        //console.log("teste");
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
