import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { BackgroundMode } from '@ionic-native/background-mode';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { ScreenOrientation } from "@ionic-native/screen-orientation";

import { Settings, User, Api, Atendimentos, Equipes, LocationTracker } from '../providers';
import { DatePipe } from '@angular/common';
import { MyApp } from './app.component';

// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptor } from '../auth/auth.interceptor';
// import { AuthService } from '../auth/auth.service';

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    AndroidPermissions,
    SplashScreen,
    StatusBar,
    Camera,
    BackgroundMode,
    BackgroundGeolocation,
    Geolocation,
    LocationTracker,
    ScreenOrientation,
    DatePipe,
    Api,
    Atendimentos,
    User,
    Equipes,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    //AuthService,
    //{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ]
})
export class AppModule { }
