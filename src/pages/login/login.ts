import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController,
  LoadingController, 
  ToastController, 
  NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userName: string = '';
  passWord: string = '';
  isShow: boolean = false;

  constructor(
       public navCtrl: NavController,
       public events: Events,
       public storage: Storage
    ){
      // this.invalidate();  
  }
  // login:{
  //   userName:'' ,
  //   passWord:''
  // }

  // invalidate(){
  //   let validator:RegExp = /^[A-Za-z0-9]{6,32}$/;
  //   let userValid = validator.test(this.userName);
  //   let pasValid = validator.test(this.passWord);
  //   if(userValid&&pasValid){
  //     this.isShow = !this.isShow;
  //     console.log("validating...")
  //   }
  // }

  onlogin(userName:HTMLInputElement,passWord:HTMLInputElement){
    let validator:RegExp = /^[A-Za-z0-9]{6,32}$/;
    let userValid = validator.test(userName.value);
    let pasValid = validator.test(passWord.value);
    if(userValid&&pasValid){
      console.log(userName.value);
      this.isShow = false;
      this.storage.set('token', userName.value).then(()=>{
        console.log('Stored token: ' + userName.value);
      }); 
      this.events.publish('user:login', {
        //token: 'succed'
      });
    }else{
      this.isShow = true; 
    }
  }
  onSubmit(form) {
    //debugger
    console.log(form.value);  // { first: '', last: '' }
    //console.log(form.valid);  // false
  }
  
}
