import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CardPage } from '../card/card';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider) {
    this.searchControl = new FormControl();
  }

ionViewDidLoad(){
  console.log('ionViewDidLoad SearchPage');
  this.setFilteredItems();
 
  this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

      this.searching = false;
      this.setFilteredItems();

  });
}

onSearchInput(){
  this.searching = true;
}
setFilteredItems() {
 
  this.items = this.dataService.filterItems(this.searchTerm);

}

gotoCard(){
  console.log("CArd Page")
  this.navCtrl.push(CardPage);
}
}
