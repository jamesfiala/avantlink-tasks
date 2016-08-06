import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AvantlinkTasksAppComponent, environment, ROUTER_PROVIDERS } from './app/';

import { TASKS_SERVICE_PROVIDER} from './app/services';


if (environment.production) {
  enableProdMode();
}

bootstrap(AvantlinkTasksAppComponent,[
	ROUTER_PROVIDERS,
	TASKS_SERVICE_PROVIDER
]);
