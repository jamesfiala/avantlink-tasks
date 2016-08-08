import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import { AvantlinkTasksAppComponent, environment, ROUTER_PROVIDERS } from './app/index';

import { TASKS_SERVICE_PROVIDERS } from './app/services/index';
import { HTTP_PROVIDERS } from '@angular/http';
import { ToastsManager, ToastOptions } from 'ng2-toastr';

let toastOptions: any = {
	positionClass: 'toast-top-center',
	maxShown: 1,
	toastLife: 2500
};

const TOAST_PROVIDERS: any = [
	provide(ToastOptions,  { useValue: new ToastOptions(toastOptions) }),
	ToastsManager
];

if (environment.production) {
  enableProdMode();
}



bootstrap(AvantlinkTasksAppComponent,[
	ROUTER_PROVIDERS,
	TASKS_SERVICE_PROVIDERS,
	HTTP_PROVIDERS,
	TOAST_PROVIDERS
]);
