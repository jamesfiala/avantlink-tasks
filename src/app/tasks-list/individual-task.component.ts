import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ITask } from './task';
//import { Autofocus } from 'src/views/common';


@Component({
	moduleId: module.id,
	changeDetection: ChangeDetectionStrategy.OnPush,
	//directives: [
	//	Autofocus
	//],
	selector: 'individual-task',
	templateUrl: './individual-task.component.html'
})

export class IndividualTask {
	@Input() task: ITask;
	//@Output() remove: EventEmitter<any> = new EventEmitter(false);
	//@Output() update: EventEmitter<any> = new EventEmitter(false);
	constructor() {}

	ngOnInit() {

	}

	editing: boolean = false;
	name: string = '';

	editname(): void {
		this.editing = true;
		this.name = this.task.name;
	}

	saveTitle(): void {
		/*if (this.editing) {
			const title: string = this.title.trim();
			if (title.length && title !== this.task.title) {
				this.update.emit({title});
			}
			this.stopEditing();
		} */
	}

	stopEditing(): void {
		this.editing = false;
	}

	toggleStatus(): void {
	/*	this.update.emit({
			completed: !this.task.completed
		});*/
	}
}