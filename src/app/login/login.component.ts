import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { AuthService } from '../auth/auth.service';

@Component({
    template: require('./login.component.html'),
    styles: [ require('./login.component.css') ]
})

export class LoginComponent {
    user: IUser = {
        email: '',
        password: ''
    }

    constructor(public af: AngularFire, private router: Router, private authService: AuthService) { 
        // this.af.auth.subscribe(auth => {
        //     console.log(auth);
        //     if(auth) {
        //         this.router.navigate(['/heroes']);
        //     } 
        // });
     }

    login() {
        console.log('login');
        this.authService.login();
    }

    loginGoogle() {
        console.log('login Google');
       this.authService.loginWithGoogle();
    }
}

interface IUser {
    email: string;
    password: string;
}