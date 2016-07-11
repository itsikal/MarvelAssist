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
  isLoggedIn: boolean = false;

  constructor(private af: AngularFire, private router: Router, private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  logout() {
    console.log('logout');
    this.authService.logout();
  }
}