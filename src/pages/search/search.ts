import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchQuery: string = '';
  items:string[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ){
    this.initializeItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  initializeItems(){
    this.items = [
      'Amsterdam',
      'Bogota',
      'nurdun',
      'andysh'
    ];
  }

  getItems(event:any){
    //Reset items back to all of the items
    this.initializeItems();

    //set val to the value of the searchbar
    let val = event.target.value;

    //if the value is an empty string dont`t filter the items
    if(val && val.trim()!=''){
      this.items = this.items.filter((item)=>{
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } 
  }

  //返回到主页面
  goBack(){
    this.navCtrl.pop()
  }

}
