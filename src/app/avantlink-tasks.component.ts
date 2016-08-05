import { Component } from '@angular/core';

import { HeaderComponent } from './header';

@Component({
  directives: [
	  HeaderComponent
  ],
  moduleId: module.id,
  selector: 'avantlink-tasks-app',
  templateUrl: 'avantlink-tasks.component.html'
})


export class AvantlinkTasksAppComponent {
  title = 'avantlink-tasks works!';
}
