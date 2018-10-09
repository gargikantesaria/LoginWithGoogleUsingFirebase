import { Injectable } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase/app';
import 'firebase/auth';


@Injectable()
export class LoginProvider {

  constructor(private googlePlus:GooglePlus) {
    console.log('Hello LoginProvider Provider');
    firebase.initializeApp({apiKey: 'APP_API_KEY',});
  }

  googlePlusLogin(): Promise<any> {
    return this.googlePlus.login({'webClientId': 'Your_Web_client_ID'})
    .then( response => {
      const googleCredential = firebase.auth.GoogleAuthProvider.credential(response.idToken);

      firebase.auth().signInWithCredential(googleCredential)
        .then( success => { 
          console.log("Firebase success: " + JSON.stringify(success)); 
        }).catch((err) => {
          console.log(err);
        });

    }).catch((error) => { console.log(error) });
  }
}