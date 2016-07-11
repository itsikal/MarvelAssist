import { provideRouter, RouterConfig }  from '@angular/router';

import { LoginComponent }  from './login/login.component';
import { HeroesComponent }  from './heroes/heroes.component';

export const routes: RouterConfig = [
	{
		path: '',
		redirectTo: '/login',
		terminal: true
	},
	{ path: 'login', component: LoginComponent },
	{ path: 'heroes', component: HeroesComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]