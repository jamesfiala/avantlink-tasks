import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AvantlinkTasksAppComponent, environment, ROUTER_PROVIDERS } from './app/';

import { TASKS_SERVICE_PROVIDERS } from './app/tasks-list';
import { HTTP_PROVIDERS } from '@angular/http';


if (environment.production) {
  enableProdMode();
}

bootstrap(AvantlinkTasksAppComponent,[
	ROUTER_PROVIDERS,
	TASKS_SERVICE_PROVIDERS,
	HTTP_PROVIDERS
]);
