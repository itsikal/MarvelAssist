import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

import { AuthService } from '../auth/auth.service';

@Component({
    template: require('./alliance-battle.component.html'),
    styles: [ require('./alliance-battle.component.css') ]
})

export class AllianceBattleComponent {

    constructor(public af: AngularFire, private router: Router, private authService: AuthService) { 

    }
}