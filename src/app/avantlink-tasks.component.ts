import { Component } from '@angular/core';

import { HeaderComponent } from './header';
import { TasksListComponent, TaskInput } from './tasks-list';

@Component({
  directives: [
	  HeaderComponent,
	  TasksListComponent,
	  TaskInput
  ],
  moduleId: module.id,
  selector: 'avantlink-tasks-app',
  templateUrl: 'avantlink-tasks.component.html'
})


export class AvantlinkTasksAppComponent {
	title = 'avantlink-tasks works!';
}
