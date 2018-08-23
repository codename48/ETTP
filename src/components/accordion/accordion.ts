import { Component, ViewChild, OnInit, Renderer} from '@angular/core';
import { CardContent } from 'ionic-angular/umd';
import { SearchPage } from '../search/search';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit{

accordionExapanded = false;
@ViewChild("cc") cardContent: any;

  constructor(public renderer : Renderer , public navCtrl: NavController) {
    
  }

 

  ngOnInit() {

    console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition","max-height 560ms, padding 500ms");

  }
  gotoSearch(){
    console.log("Search Page")
    this.navCtrl.push(SearchPage);
  }

  toggleAccordion(){

    if(this.accordionExapanded){
      this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height","0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement,"padding","0px 16px");

  }else{
    this.renderer.setElementStyle(this.cardContent.nativeElement,"max-height","500px");
    this.renderer.setElementStyle(this.cardContent.nativeElement,"padding","13px 16px");


  }
  this.accordionExapanded = !this.accordionExapanded;

}
    
}
