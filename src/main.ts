import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

import { FIREBASE_PROVIDERS, 
         defaultFirebase, 
         firebaseAuthConfig, 
         AuthProviders, 
         AuthMethods } from '../node_modules/angularfire2';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyAvx6gpfZs-U5hrX6uvG7P8ewveEtRH05U",
    authDomain: "marvel-assist.firebaseapp.com",
    databaseURL: "https://marvel-assist.firebaseio.com",
    storageBucket: "marvel-assist.appspot.com",
  }),
  firebaseAuthConfig({
    provider: AuthProviders.Password,
    method: AuthMethods.Password,
  })
]);