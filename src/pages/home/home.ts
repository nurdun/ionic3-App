import { Component,ViewChild} from '@angular/core';
import { NavController,Nav} from 'ionic-angular';
import { App,MenuController,Platform } from 'ionic-angular';

import { ContentPage } from '../content/content'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = ContentPage;
  
  pages: Array<{title: string,Component: any}>;
  
  isAndroid: boolean = false;
  constructor(
    public navCtrl: NavController,
    platform: Platform
  ){
    this.pages = [
      {title:'page one',Component: ContentPage}
    ]
    //this.isAndroid = platform.is('android');
    //menuCtrl.enable(true);
  }

  //当显示该视图层时
  // ionViewWillEnter(){
  //   this.navCtrl.push(SegmentPage);
  // }

  //定义左侧菜单点击打开页面的函数
  openPage(page){
    this.nav.setRoot(page.Component);
  }
}
