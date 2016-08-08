import { Component, OnInit, Injectable } from '@angular/core';
import { ITask } from './task';
import { IndividualTask } from './individual-task.component'
import { TasksService } from "../services/tasks-service";
import { ToastsManager } from 'ng2-toastr';

@Component({
  moduleId: module.id,
  directives: [
	  IndividualTask
  ],
  selector: 'al-tasks-list',
  templateUrl: 'tasks-list.component.html',
})

@Injectable()
export class TasksList implements OnInit {
	tasks: ITask[];
	constructor(private tasksService: TasksService, private toastService: ToastsManager ) {
	}

	ngOnInit() {
		this.tasksService.tasks$.subscribe(tasks => this.tasks = tasks,
		error => this.toastService.error(error));
	}
}
