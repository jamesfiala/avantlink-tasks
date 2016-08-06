import { Injectable } from '@angular/core';
import { ITask } from "../tasks-list/task";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TasksService {
	private static get APPLICATION_ID(): string { return "72ea962f-5ac0-11e6-9168-0a5449992ecf"; }

	tasks: ITask[];

	constructor() {
		this.loadTasks();
	}

	private loadTasks(): void {
		this.tasks = [{name: "task 1 from service", id: 1}, {name: "task 12", id: 2}, {name: "task 3", id: 3}];
	}

	public addTask(task: ITask): Observable<ITask> {
		this.tasks.push(task);
		return null;
	}

	public updateTask(newName: string, id: number): Observable<ITask> {
		for(let i: number = 0; i < this.tasks.length; i++) {
			if(id == this.tasks[i].id) {
				this.tasks[i].name = newName;
				return null;
			}
		}
		return null;
	}

	public deleteTask(task: ITask): Observable<ITask> {
		for(let i: number = 0; i < this.tasks.length; i++) {
			if(task.id == this.tasks[i].id) {
				this.tasks.splice(i, 1);
				return null;
			}
		}
		return null;
	}

}
