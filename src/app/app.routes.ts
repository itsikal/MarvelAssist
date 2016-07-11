import { provideRouter, RouterConfig }  from '@angular/router';

import { LoginComponent }  from './login/login.component';
import { HeroesComponent }  from './heroes/heroes.component';
import { AllianceBattleComponent }  from './alliance/alliance-battle.component';

export const routes: RouterConfig = [
	{
		path: '',
		redirectTo: '/login',
		terminal: true
	},
	{ path: 'login', component: LoginComponent },
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'aliance-battle', component: AllianceBattleComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]