import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Deeplinks } from '@ionic-native/deeplinks';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http';
import { AccordionComponent } from '../components/accordion/accordion';
import { SearchPage } from '../components/search/search';
import { DataProvider } from '../providers/data/data';
import { CardPage } from '../components/card/card';
import { SocialSharing } from '@ionic-native/social-sharing';

import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccordionComponent,
    SearchPage,
    CardPage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccordionComponent,
    SearchPage,
    CardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    Deeplinks,
    SocialSharing
  ]
})
export class AppModule {}
