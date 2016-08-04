import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AvantlinkTasksAppComponent } from '../app/avantlink-tasks.component';

beforeEachProviders(() => [AvantlinkTasksAppComponent]);

describe('App: AvantlinkTasks', () => {
  it('should create the app',
      inject([AvantlinkTasksAppComponent], (app: AvantlinkTasksAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'avantlink-tasks works!\'',
      inject([AvantlinkTasksAppComponent], (app: AvantlinkTasksAppComponent) => {
    expect(app.title).toEqual('avantlink-tasks works!');
  }));
});
