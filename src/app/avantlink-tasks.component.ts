import { Component } from '@angular/core';

import { Header } from './header/header.component';
import { TasksContainer } from './tasks-list/tasks-container.component';

@Component({
  directives: [
	  Header,
	  TasksContainer
  ],
  moduleId: module.id,
  selector: 'avantlink-tasks-app',
  templateUrl: 'avantlink-tasks.component.html'
})


export class AvantlinkTasksAppComponent {
}
