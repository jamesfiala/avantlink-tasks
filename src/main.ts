import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AvantlinkTasksAppComponent, environment, ROUTER_PROVIDERS } from './app/';


if (environment.production) {
  enableProdMode();
}

bootstrap(AvantlinkTasksAppComponent,[
	ROUTER_PROVIDERS
]);
