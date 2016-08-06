import { ChangeDetectionStrategy, Component, Input, Output, OnInit } from '@angular/core';
import { ITask } from './task';


@Component({
	moduleId: module.id,
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'individual-task',
	templateUrl: './individual-task.component.html'
})

export class IndividualTask {
	@Input() task: ITask;
	constructor() {}

	ngOnInit() {

	}

	editing: boolean = false;
	editingName: string = '';

	editName(element: HTMLElement): void {
		this.editing = true;
		this.editingName = this.task.name;
		//have to wait until the element is unhidden before it can receive focus.
		//This is a little bit hacky
		setTimeout(():void => {
			element.focus();
		}, 0);
	}

	saveName(): void {
		  if (this.editing) {
			let newName: string = this.editingName.trim();
			if (newName.length > 0 && newName !== this.task.name) {
				//TODO: call backend here
				this.task.name = newName;
			}
			this.stopEditing();
		}
	}

	stopEditing(): void {
		this.editing = false;
	}
}