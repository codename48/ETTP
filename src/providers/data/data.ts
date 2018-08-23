import { Injectable } from '@angular/core';
import { Http,HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
 
@Injectable()
export class DataProvider {
 
    items: any;
 
    constructor(public http: Http) {
 
        this.items = [
            {title: 'FCIU5641687'},
            {title: 'FCIU5641587'},
            {title: 'FCIU5641487'},
            {title: 'FCIU5641387'},
            {title: 'FCIU5641287'},
            {title: 'FCIU5641187'}
        ]
 
    }
 
    filterItems(searchTerm){
 
        return this.items.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });    
 
    }
 
}