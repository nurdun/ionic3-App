import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  constructor(
    public navCtrl: NavController,
    public storage:Storage,
    public events:Events
  ) {

  }
    //点击登出按钮时返回到登录页面
    //并且清理token
    logout(){
      this.storage.set('token', '').then(()=>{
        console.log('token was cleaned');
      }); 
      this.events.publish('user:logout', {
        //token: 'succed'
      });
    }
}
