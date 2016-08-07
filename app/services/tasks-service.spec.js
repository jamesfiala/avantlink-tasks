"use strict";
var testing_1 = require('@angular/core/testing');
var tasks_service_1 = require('./tasks-service');
testing_1.describe('TasksService Service', function () {
    testing_1.beforeEachProviders(function () { return [tasks_service_1.TasksService]; });
    testing_1.it('should ...', testing_1.inject([tasks_service_1.TasksService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=tasks-service.spec.js.map