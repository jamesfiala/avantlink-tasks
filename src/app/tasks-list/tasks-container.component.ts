import { Component } from '@angular/core';
import { TaskInput } from './task-input.component';
import { TasksList } from './tasks-list.component';


@Component({
	moduleId: module.id,
	directives: [
		TaskInput,
		TasksList
	],
	selector: 'al-tasks-container',
	templateUrl: 'tasks-container.component.html'
})

export class TasksContainer {

}