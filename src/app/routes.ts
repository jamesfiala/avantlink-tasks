import { PLATFORM_DIRECTIVES } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES, RouterConfig }  from '@angular/router';

import { TasksListComponent } from './tasks-list';


const routes: RouterConfig = [
	{path: '', component: TasksListComponent}
];


export const ROUTER_PROVIDERS = [
	provideRouter(routes),
	{provide: PLATFORM_DIRECTIVES, useValue: ROUTER_DIRECTIVES, multi: true}
];