export { TasksList } from './tasks-list.component';
export { Task, ITask } from './task';
export { TaskInput } from './task-input.component';
export { TasksContainer} from './tasks-container.component';

import { TasksService } from './tasks-service';

export { TasksService } from './tasks-service';

export const TASKS_SERVICE_PROVIDERS: any[] = [
	TasksService
];
