import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //这里可以接受参数
    // const data = this.navParams.data;
    // const value1 = this.navParams.get('key1');
    // const value2 = this.navParams.get('key2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
