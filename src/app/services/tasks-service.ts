import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ITask, Task, ITaskResponse } from '../tasks-list/task';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'

@Injectable()
export class TasksService {
	private static get APPLICATION_ID(): string { return '72ea962f-5ac0-11e6-9168-0a5449992ecf'; }

	private static get TASKS_API_URL(): string { return 'http://homework.avantlink.com/tasks' }

	private _tasksSource: Subject<ITask[]> = new Subject<ITask[]>();
	private _tasks: ITask[];

	tasks$ = this._tasksSource.asObservable();

	constructor(private http: Http) {
		this._tasks = [];
		this.loadTasks();
	}

	/***********************
	 * Public API
	 ***********************/

	public addTask(name: string): void {
		this.http.post(TasksService.TASKS_API_URL, { 'name': name }, { headers: this.getJsonHeader() })
			.subscribe(this.addTaskSuccess.bind(this), this.taskHttpError.bind(this), this.updateObservables.bind(this));
	}

	public updateTask(newName: string, id: number): void {
		this.http.put(TasksService.TASKS_API_URL+'?id='+id, { 'name': newName }, { headers: this.getDefaultHeader() })
			.subscribe(this.updateTaskSuccess.bind(this), this.taskHttpError.bind(this), this.updateObservables.bind(this));
	}

	public deleteTask(task: ITask): void {
		this.http.delete(TasksService.TASKS_API_URL+'?id='+task.id, { headers: this.getDefaultHeader() })
		.subscribe(this.deleteTaskSuccess.bind(this), this.taskHttpError.bind(this), this.updateObservables.bind(this));
	}

	private loadTasks(): void {
		this._tasks = [];
		this.http.get(TasksService.TASKS_API_URL, { headers: this.getDefaultHeader() })
		.subscribe(this.tasksLoadSuccess.bind(this), this.taskHttpError.bind(this), this.updateObservables.bind(this));
	}


	/*****************************
	 * HTTP Response handlers
	 ****************************/
	private addTaskSuccess(response: Response): void {
		if(response && response.json().success) {
			let task:ITaskResponse = response.json().data;
			this._tasks.push(new Task(task.task_name, task.task_id));
		} else {
			console.log('Request unsuccessful');
		}
	}

	private deleteTaskSuccess(response: Response): void {
		if(response && response.json().success) {
			let task:ITaskResponse = response.json().data;
			for (let i:number = 0; i < this._tasks.length; i++) {
				if (task.task_id == this._tasks[i].id) {
					this._tasks.splice(i, 1);
					return;//exit loop once we found the task to be deleted
				}
			}
		} else {
			console.log('Request unsuccessful');
		}
	}

	private tasksLoadSuccess(response: Response): void {
		if(response && response.json().success) {
			let tasksResponse:ITaskResponse[] = response.json().data;
			//Transform server response to front-end ITask object
			for (let i:number = 0; i < tasksResponse.length; i++) {
				this._tasks.push({name: tasksResponse[i].task_name, id: tasksResponse[i].task_id});
			}
			this._tasksSource.next(this._tasks);
		} else {
			console.log('Request unsuccessful');
		}
	}

	private taskHttpError(error: any): void {
		console.log(error);
	}

	private updateTaskSuccess(response: Response): void {
		if(response && response.json().success) {
			let task:ITaskResponse = response.json().data;
			for(let i: number = 0; i < this._tasks.length; i++) {
				if(task.task_id == this._tasks[i].id) {
					this._tasks[i].name = task.task_name;
					return; //exit loop once we found the task to be updated
				}
			}
		}
	}


	/*****************************
	 * Helper methods
	 ****************************/
	//This creates a header that includes the Application ID on it
	private getDefaultHeader(): Headers {
		let headers: Headers = new Headers();
		headers.append('Application-ID', TasksService.APPLICATION_ID);
		return headers;
	}

	private getJsonHeader(): Headers {
		let headers: Headers = this.getDefaultHeader();
		headers.append('Content-Type', 'application/json');
		return headers;
	}

	//Whenever the _tasks object changes
	//we need to let all of it's listeners know so they can update.
	private updateObservables(): void {
		this._tasksSource.next(this._tasks);
	}
}
