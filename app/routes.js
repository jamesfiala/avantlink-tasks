"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tasks_list_component_1 = require('./tasks-list/tasks-list.component.js');
var task_input_component_1 = require('./tasks-list/task-input.component.js');
var tasks_container_component_1 = require('./tasks-list/tasks-container.component.js');
var routes = [
    { path: '', redirectTo: '/tasks' },
    { path: '**', redirectTo: '/tasks' },
    { path: 'input', component: task_input_component_1.TaskInput },
    { path: 'list', component: tasks_list_component_1.TasksList },
    { path: 'tasks', component: tasks_container_component_1.TasksContainer },
];
exports.ROUTER_PROVIDERS = [
    router_1.provideRouter(routes),
    { provide: core_1.PLATFORM_DIRECTIVES, useValue: router_1.ROUTER_DIRECTIVES, multi: true }
];
//# sourceMappingURL=routes.js.map