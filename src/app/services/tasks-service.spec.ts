import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TasksService } from './tasks-service';

describe('TasksService Service', () => {
  beforeEachProviders(() => [TasksService]);

  it('should ...',
      inject([TasksService], (service: TasksService) => {
    expect(service).toBeTruthy();
  }));
});
