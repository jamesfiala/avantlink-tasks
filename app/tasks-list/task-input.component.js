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
var tasks_service_1 = require("../services/tasks-service");
var TaskInput = (function () {
    function TaskInput(tasksService) {
        this.tasksService = tasksService;
        this.taskName = '';
    }
    TaskInput.prototype.addTask = function () {
        var name = this.taskName.trim();
        if (name.length) {
            this.tasksService.addTask(name);
        }
        this.resetInput();
    };
    TaskInput.prototype.resetInput = function () {
        this.taskName = '';
    };
    TaskInput = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'al-task-input',
            templateUrl: './task-input.component.html'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [tasks_service_1.TasksService])
    ], TaskInput);
    return TaskInput;
}());
exports.TaskInput = TaskInput;
//# sourceMappingURL=task-input.component.js.map