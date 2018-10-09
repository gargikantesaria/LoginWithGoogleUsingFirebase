import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private loginProvider:LoginProvider) {
  }

  loginWithGooglePlus(){
    this.loginProvider.googlePlusLogin().then((response) => {
      console.log("got response", response);
    }).catch((error) =>{
      console.log(error);
    })
  }

}
