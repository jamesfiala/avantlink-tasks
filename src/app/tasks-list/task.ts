export interface ITask {
	name: string;
	id: string;
}

export class Task implements ITask {
	name = null;
	id = null;
	constructor(taskName: string, taskId:string) {
		this.name = taskName;
		this.id = taskId;
	}
}