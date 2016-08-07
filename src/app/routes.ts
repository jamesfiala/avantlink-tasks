import { PLATFORM_DIRECTIVES } from '@angular/core';
import { provideRouter, ROUTER_DIRECTIVES, RouterConfig }  from '@angular/router';

import { TasksList, TasksContainer, TaskInput } from './tasks-list';


const routes: RouterConfig = [
	{path: '', redirectTo: '/tasks' },
	{path: '**', redirectTo: '/tasks' },
	{path: 'input', component: TaskInput },
	{path: 'list', component: TasksList },
	{path: 'tasks', component: TasksContainer},
];


export const ROUTER_PROVIDERS = [
	provideRouter(routes),
	{provide: PLATFORM_DIRECTIVES, useValue: ROUTER_DIRECTIVES, multi: true}
];