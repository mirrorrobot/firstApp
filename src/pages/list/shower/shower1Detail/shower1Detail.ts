import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as myGlobals1 from '../../list';
import * as myGlobals from '../shower';
var page=new myGlobals1.ListPage(myGlobals1.h1,myGlobals1.h2,myGlobals1.h3);

@IonicPage()
@Component({
  selector: 'page-shower1Detail',
  templateUrl: 'shower1Detail.html'
})

export class shower1DetailPage {
  
  load:any;
  posts: any;
  
  constructor(public navCtrl: NavController, public http: Http) {
        this.posts=myGlobals1.shower[myGlobals.k1];
  }
  
  doRefresh(refresher) {
  
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      page.refresh(refresher);
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}