import { Component, ViewChild } from '@angular/core';
import { AndroidPermissions } from '@ionic-native/android-permissions';
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

  constructor(private androidPermissions: AndroidPermissions,
    platform: Platform, settings: Settings, private config: Config,
    private statusBar: StatusBar, private splashScreen: SplashScreen) {

      platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        //console.log("teste");
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.androidPermissions.requestPermissions([
          this.androidPermissions.PERMISSION.CAMERA,
          this.androidPermissions.PERMISSION.CALL_PHONE,
          this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
          this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION,
          this.androidPermissions.PERMISSION.ACCESS_BACKGROUND_LOCATION,
          this.androidPermissions.PERMISSION.ACCESS_LOCATION_EXTRA_COMMANDS,
          this.androidPermissions.PERMISSION.ACCESS_MEDIA_LOCATION,
          this.androidPermissions.PERMISSION.REQUEST_COMPANION_RUN_IN_BACKGROUND,
          this.androidPermissions.PERMISSION.REQUEST_COMPANION_USE_DATA_IN_BACKGROUND,
          this.androidPermissions.PERMISSION.KILL_BACKGROUND_PROCESSES
        ]);
      });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
