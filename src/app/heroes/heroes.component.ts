import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    template: require('./heroes.component.html'),
    styles: [ require('./heroes.component.css') ]
})

export class HeroesComponent implements OnInit {
    heroes: FirebaseListObservable<any[]>;

    constructor(public af: AngularFire) { }

    ngOnInit() {
        console.log('get heroes');
        this.getHeroes();
    }

    getHeroes() {
        this.heroes = this.af.database.list('/heroes');
    }
}