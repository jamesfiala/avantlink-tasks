"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var task_1 = require('../tasks-list/task');
var Subject_1 = require('rxjs/Subject');
var TasksService = (function () {
    function TasksService(http) {
        this.http = http;
        this._tasksSource = new Subject_1.Subject();
        this.tasks$ = this._tasksSource.asObservable();
        this._tasks = [];
        this.loadTasks();
    }
    Object.defineProperty(TasksService, "APPLICATION_ID", {
        get: function () { return '72ea962f-5ac0-11e6-9168-0a5449992ecf'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TasksService, "TASKS_API_URL", {
        get: function () { return 'http://homework.avantlink.com/tasks'; },
        enumerable: true,
        configurable: true
    });
    /***********************
     * Public API
     ***********************/
    TasksService.prototype.addTask = function (name) {
        this.http.post(TasksService.TASKS_API_URL, { 'name': name }, { headers: this.getJsonHeader() })
            .subscribe(this.addTaskSuccess.bind(this), this.taskHttpError.bind(this), this.updateObservables.bind(this));
    };
    TasksService.prototype.updateTask = function (newName, id) {
        this.http.put(TasksService.TASKS_API_URL + '?id=' + id, { 'name': newName }, { headers: this.getDefaultHeader() })
            .subscribe(this.updateTaskSuccess.bind(this), this.taskHttpError.bind(this), this.updateObservables.bind(this));
    };
    TasksService.prototype.deleteTask = function (task) {
        this.http.delete(TasksService.TASKS_API_URL + '?id=' + task.id, { headers: this.getDefaultHeader() })
            .subscribe(this.deleteTaskSuccess.bind(this), this.taskHttpError.bind(this), this.updateObservables.bind(this));
    };
    TasksService.prototype.loadTasks = function () {
        this._tasks = [];
        this.http.get(TasksService.TASKS_API_URL, { headers: this.getDefaultHeader() })
            .subscribe(this.tasksLoadSuccess.bind(this), this.taskHttpError.bind(this), this.updateObservables.bind(this));
    };
    /*****************************
     * HTTP Response handlers
     ****************************/
    TasksService.prototype.addTaskSuccess = function (response) {
        if (response && response.json().success) {
            var task = response.json().data;
            this._tasks.push(new task_1.Task(task.task_name, task.task_id));
        }
        else {
            console.log('Request unsuccessful');
        }
    };
    TasksService.prototype.deleteTaskSuccess = function (response) {
        if (response && response.json().success) {
            var task = response.json().data;
            for (var i = 0; i < this._tasks.length; i++) {
                if (task.task_id == this._tasks[i].id) {
                    this._tasks.splice(i, 1);
                    return; //exit loop once we found the task to be deleted
                }
            }
        }
        else {
            console.log('Request unsuccessful');
        }
    };
    TasksService.prototype.tasksLoadSuccess = function (response) {
        if (response && response.json().success) {
            var tasksResponse = response.json().data;
            //Transform server response to front-end ITask object
            for (var i = 0; i < tasksResponse.length; i++) {
                this._tasks.push({ name: tasksResponse[i].task_name, id: tasksResponse[i].task_id });
            }
            this._tasksSource.next(this._tasks);
        }
        else {
            console.log('Request unsuccessful');
        }
    };
    TasksService.prototype.taskHttpError = function (error) {
        console.log(error);
    };
    TasksService.prototype.updateTaskSuccess = function (response) {
        if (response && response.json().success) {
            var task = response.json().data;
            for (var i = 0; i < this._tasks.length; i++) {
                if (task.task_id == this._tasks[i].id) {
                    this._tasks[i].name = task.task_name;
                    return; //exit loop once we found the task to be updated
                }
            }
        }
    };
    /*****************************
     * Helper methods
     ****************************/
    //This creates a header that includes the Application ID on it
    TasksService.prototype.getDefaultHeader = function () {
        var headers = new http_1.Headers();
        headers.append('Application-ID', TasksService.APPLICATION_ID);
        return headers;
    };
    TasksService.prototype.getJsonHeader = function () {
        var headers = this.getDefaultHeader();
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    //Whenever the _tasks object changes
    //we need to let all of it's listeners know so they can update.
    TasksService.prototype.updateObservables = function () {
        this._tasksSource.next(this._tasks);
    };
    TasksService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TasksService);
    return TasksService;
}());
exports.TasksService = TasksService;
//# sourceMappingURL=tasks-service.js.map