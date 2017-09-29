import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { JPush } from 'ionic3-jpush';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  token:string;

  constructor(
    public platform: Platform,
    public push:Push,
    public jPush: JPush,
    public storage:Storage,
    public events:Events,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ){
    //当storage准备就绪之后，从storage中读取token
    //如果token存在的话直接跳到主页面中
    //如果token不存在的话进入登录页面
    storage.ready().then(()=>{
      storage.get('token').then(
        (token:string)=>{
          if(token!=null){
            console.log('token:'+token);
            this.rootPage = TabsPage;
          }else{
            console.log('token undefined');
            this.rootPage = LoginPage;
          }
        }
      );
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      if(this.platform.is('ios')){
        this.initPushNotification();
      }else if(this.platform.is('android')){
        this.jPush.init();
        this.androidGetRegId();

        this.jPush.openNotification()
        .subscribe( res => {
          console.log('收到推送');
          console.log(res)
        });
  
        this.jPush.receiveNotification()
          .subscribe( res => {
            console.log('收到推送');
            console.log(res)
        });
  
        this.jPush.receiveMessage()
          .subscribe( res => {
            console.log('收到推送');
            console.log(res)
        });
      }else{
        //...
      }
    });

    //当用户的操作为user:login时rootPage的取值为TabsPage
    this.events.subscribe('user:login', (params) => {
      console.log('User logged in - Changing to tabs page');
      this.rootPage = TabsPage;
    });
    //当用户的操作为user:logout时rootPage的取值为LoginPage
    this.events.subscribe('user:logout', (params) => {
      console.log('User logout');
      this.rootPage = LoginPage;
    });
  }

  androidGetRegId(){
    this.jPush.getRegistrationID()
    .then(regId => {
      console.log(regId)
      this.storage.set('regId', regId);
    })
    .catch(err => alert(err))
  }

  //IOS端消息推送函数
  initPushNotification() { 
    if(!this.platform.is('cordova')) {
      console.warn('Push notifications only work on a real device');
        return;
      }
    
    const options: PushOptions = {
      ios: {
        alert: true,
        badge: true,
        sound: true
      }
    };

    const pushObject: PushObject = this.push.init(options);
    
      pushObject.on('registration').subscribe((data: any) => {
        console.log('device token: ' + data.registrationId);
        this.storage.set('device token', data.registrationId);
      });
      pushObject.on('error').subscribe(error => {
        console.error('Error with Push plugin' + error);
      });
      pushObject.on('notification').subscribe((data: any) => { 
        // log message
        console.log('Got a message: ' + data.message);   
        // if user using app and push notification comes
        if(data.additionalData.foreground) {  
          // for example show some alert in the app
          console.log('Notification received while App was in foreground'); 
        } else {   
          // do something on push notification click
          console.log('Push notification clicked');  
        }
      });
  }
}
