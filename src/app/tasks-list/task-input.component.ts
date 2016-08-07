import { Injectable, Component } from '@angular/core';
import { TasksService } from "../services/tasks-service";


@Component({
	moduleId: module.id,
	selector: 'al-task-input',
	templateUrl: './task-input.component.html'
})

@Injectable()
export class TaskInput {
	taskName: string = '';

	constructor(private tasksService: TasksService) {
	}

	addTask(): void {
		let name: string = this.taskName.trim();
		if (name.length) {
			this.tasksService.addTask(name);
		}
		this.resetInput();
	}

	private resetInput(): void {
		this.taskName = '';
	}
}
