import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Deeplinks } from '@ionic-native/deeplinks';
import { HomePage } from '../pages/home/home';
import { Nav, NavController} from 'ionic-angular'
import { AccordionComponent } from '../components/accordion/accordion';
import { SearchPage } from '../components/search/search';
import { CardPage } from '../components/card/card';
import { SocialSharing } from '@ionic-native/social-sharing';
@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;
  @ViewChild(Nav) navChild:Nav;

  constructor(
  platform: Platform,
  public statusBar: StatusBar,
  public splashScreen: SplashScreen,
  public deeplinks: Deeplinks
  ) {
    platform.ready().then(() => {
      this.statusBar.styleDefault();

      //This is the code who responds to the app deeplinks
      //Deeplinks if from Ionic Native
      this.deeplinks.routeWithNavController(this.navChild, {
        '/accordion': AccordionComponent,
        '/search': SearchPage,
        '/card': CardPage
      }).subscribe((match) => {
        console.log('Successfully routed', match);
      }, (nomatch) => {
        console.log('Unmatched Route', nomatch);
      });
    });
  }

}