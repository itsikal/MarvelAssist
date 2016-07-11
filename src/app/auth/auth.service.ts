import { Injectable } from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState   } from 'angularfire2';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState  = null;

  constructor(private af: AngularFire) {
    this.af.auth.subscribe(auth => {
        console.log(auth);
        this.authState = auth;
        // if(!auth) {
        //     this.router.navigate(['/login']);
        // }
    });
  }

  get authentificated() {
      return this.authState !== null;
  }

  login() {
    this.af.auth.login();
  }

  loginWithGoogle() {
      this.af.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
      });
  }

  logout() {
    this.af.auth.logout();
  }
}