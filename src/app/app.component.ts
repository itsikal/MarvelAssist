import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [ require('./app.component.css') ],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ AuthService ]
})

export class AppComponent {

  constructor(private router: Router, private auth: AuthService) {
    console.log('AppComponent constructor', auth);
  }

  logout() {
    console.log('logout');
    this.auth.logout();
  }
}