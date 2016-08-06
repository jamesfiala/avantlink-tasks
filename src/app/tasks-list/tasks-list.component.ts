import { Component, OnInit } from '@angular/core';
import { ITask } from './task';
import { IndividualTask } from './individual-task.component'

@Component({
  moduleId: module.id,
  directives: [
	  IndividualTask
  ],
  selector: 'tasks-list',
  templateUrl: 'tasks-list.component.html',
})
export class TasksListComponent implements OnInit {
	tasks: ITask[]	= [{name: "task 1", id: 1}, {name: "task 12", id: 2}, {name: "task 3", id: 3}];
  constructor() {}

  ngOnInit() {
  }

}
