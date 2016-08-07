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
var tasks_service_1 = require('../services/tasks-service');
var IndividualTask = (function () {
    function IndividualTask(tasksService) {
        this.tasksService = tasksService;
        this.editing = false;
        this.editingName = '';
    }
    IndividualTask.prototype.editName = function (element) {
        this.editing = true;
        this.editingName = this.task.name;
        //have to wait until the element is unhidden before it can receive focus.
        //This is a little bit hacky- see if you can find a way to not use timeouts
        setTimeout(function () {
            element.focus();
        }, 0);
    };
    IndividualTask.prototype.saveName = function () {
        if (this.editing) {
            var newName = this.editingName.trim();
            if (newName.length > 0 && newName !== this.task.name) {
                /*Update the task name here so it looks seamless to the user
                 If there is a server error when it tries to update, the
                 tasksService will still push out the old tasks list
                 and the change will be reverted then. */
                this.task.name = newName;
                this.tasksService.updateTask(newName, this.task.id);
            }
            this.stopEditing();
        }
    };
    IndividualTask.prototype.stopEditing = function () {
        this.editing = false;
    };
    IndividualTask.prototype.deleteTask = function () {
        this.tasksService.deleteTask(this.task);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], IndividualTask.prototype, "task", void 0);
    IndividualTask = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'al-individual-task',
            templateUrl: './individual-task.component.html'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [tasks_service_1.TasksService])
    ], IndividualTask);
    return IndividualTask;
}());
exports.IndividualTask = IndividualTask;
//# sourceMappingURL=individual-task.component.js.map