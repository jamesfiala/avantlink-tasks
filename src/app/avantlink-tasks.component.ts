import { Component } from '@angular/core';

import { HeaderComponent } from './header';
import { TasksListComponent } from './tasks-list';

@Component({
  directives: [
	  HeaderComponent,
	  TasksListComponent
  ],
  moduleId: module.id,
  selector: 'avantlink-tasks-app',
  templateUrl: 'avantlink-tasks.component.html'
})


export class AvantlinkTasksAppComponent {

	public static get APPLICATION_ID(): string { return "72ea962f-5ac0-11e6-9168-0a5449992ecf"; }
	title = 'avantlink-tasks works!';
}
