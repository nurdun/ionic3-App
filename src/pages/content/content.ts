import { Component } from '@angular/core';
import { 
  IonicPage,
  NavController,
  NavParams,
  App,
  MenuController,
  Platform,
  Nav 
} from 'ionic-angular';
import { JPush } from 'ionic3-jpush';
import { Observable } from 'rxjs/Observable';

import { DetailPage } from '../detail/detail';
import { SearchPage } from '../search/search';

/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {
  //设置默认segment的值
  cars: string = "carA";
  isAndroid: boolean = false;
  alias: string = "";
  msgList: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public nav: Nav,
    public jPush: JPush,
    platform: Platform,
  ){
    this.isAndroid = platform.is('android');
    
    // this.jPush.startJPushSDK()
    // .then(()=>{
    //   this.jPush.init();
    // })
    // .then(()=>{
    //   this.jPush.getRegistrationID().then(regid => {
    //     console.log("regid:"+regid)
    //   })
    // })
    this.jPush.init().then(()=>{
      this.jPush.getRegistrationID().then(regid => {
        console.log("regid:"+regid)
      })
    })
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentPage');
  }

  //当显示该视图层时
  // ionViewWillEnter(){
  //   this.navCtrl.push(SegmentPage);
  // }
  toDetail(){
    this.navCtrl.push(DetailPage,{
      //这里可以给detail页面传参数
      //key1:value,
      //key2:value
    });
  }
  toSearch(){
    this.navCtrl.push(SearchPage,{
      //这里可以给search页面传参数
      //key1:value,
      //key2:value
    });
  }
}
