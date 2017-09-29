import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { UserPage } from '../pages/user/user';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { DetailPageModule } from '../pages/detail/detail.module';
import { ContentPageModule } from '../pages/content/content.module';
import { SearchPageModule } from '../pages/search/search.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {IonicStorageModule} from '@ionic/storage';
import { JPush } from 'ionic3-jpush';
import { Push } from '@ionic-native/push';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    UserPage,
    HomePage,
    TabsPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp,{
      //mode:"ios"
    }),
    IonicStorageModule.forRoot(),
    DetailPageModule,
    ContentPageModule,
    SearchPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    UserPage,
    HomePage,
    TabsPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JPush,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
