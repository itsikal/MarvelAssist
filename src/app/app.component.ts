import { Component } from '@angular/core';
import '../../public/css/styles.css';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [ require('./app.component.css') ]
})

export class AppComponent {
  heroes: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.heroes = af.database.list('/heroes');
  }
}