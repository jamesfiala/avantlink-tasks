import { Injectable, Component } from '@angular/core';
import { TasksService } from "../services/tasks-service";
import { ToastsManager } from 'ng2-toastr';


@Component({
	moduleId: module.id,
	selector: 'al-task-input',
	templateUrl: './task-input.component.html'
})

@Injectable()
export class TaskInput {
	taskName: string = '';

	constructor(private tasksService: TasksService, private toastService: ToastsManager) {
	}

	addTask(): void {
		let name: string = this.taskName.trim();
		if (name.length) {
			this.tasksService.addTask(name);
		}
		else {
			this.toastService.error('Task cannot be empty');
		}
		this.resetInput();
	}

	private resetInput(): void {
		this.taskName = '';
	}
}
