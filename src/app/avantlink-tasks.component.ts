import { Component } from '@angular/core';

import { Header } from './header';
import { TasksContainer } from './tasks-list';

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
