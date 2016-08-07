export interface ITask {
	name: string;
	id: number;
}

export class Task implements ITask {
	name = null;
	id = null;
	constructor(taskName: string, taskId: number) {
		this.name = taskName;
		this.id = taskId;
	}
}

//The AvantLink Response Object
export interface ITaskResponse {
	application_id: string;
	task_id: number;
	task_name: string;
}