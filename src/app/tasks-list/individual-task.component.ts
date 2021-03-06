import { Component, Input, Injectable } from '@angular/core';
import { ITask } from './task';
import { TasksService } from '../services/tasks-service';
import { ToastsManager } from 'ng2-toastr';


@Component({
	moduleId: module.id,
	selector: 'al-individual-task',
	templateUrl: './individual-task.component.html'
})

@Injectable()
export class IndividualTask {
	@Input() task: ITask;
	constructor(private tasksService: TasksService, private toastService: ToastsManager) {}

	editing: boolean = false;
	editingName: string = '';

	editName(element: HTMLElement): void {
		this.editing = true;
		this.editingName = this.task.name;
		//have to wait until the element is unhidden before it can receive focus.
		//This is a little bit hacky- see if you can find a way to not use timeouts
		setTimeout(():void => {
			element.focus();
		}, 0);
	}

	saveName(): void {
		  if (this.editing) {
			let newName: string = this.editingName.trim();
			if (newName.length > 0 && newName !== this.task.name) {
				/*Update the task name here so it looks seamless to the user
				 If there is a server error when it tries to update, the
				 tasksService will still push out the old tasks list
				 and the change will be reverted then. */
				this.task.name = newName;

				this.tasksService.updateTask(newName, this.task.id);
			} else if(newName.length == 0) {
				this.toastService.error('Task cannot be empty');
			}
			this.stopEditing();
		}
	}

	stopEditing(): void {
		this.editing = false;
	}

	deleteTask(): void {
		this.tasksService.deleteTask(this.task);
	}
}