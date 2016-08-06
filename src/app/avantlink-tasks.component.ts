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
	title = 'avantlink-tasks works!';
}
