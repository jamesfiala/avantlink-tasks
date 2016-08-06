import { Component, OnInit, Injectable } from '@angular/core';
import { ITask } from './task';
import { IndividualTask } from './individual-task.component'
import { TasksService } from "../services/tasks-service";

@Component({
  moduleId: module.id,
  directives: [
	  IndividualTask
  ],
  selector: 'al-tasks-list',
  templateUrl: 'tasks-list.component.html',
})

@Injectable()
export class TasksListComponent implements OnInit {
	tasks: ITask[];
	constructor(private tasksService: TasksService) {
	}

	ngOnInit() {
		this.tasks = this.tasksService.tasks;
	}
}
