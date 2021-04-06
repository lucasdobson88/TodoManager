import { TestBed } from '@angular/core/testing';
import { Task } from '@app/shared';

import { TasksService } from './tasks.service';

describe("TasksService", () => {
  let service: TasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  fit("should add a value to the tasks when I create", done => {
    const task = new Task({
      title: "A test task",
      description: "This is a test task",
      priority: 0,
      type: "Personal"
    });
    service.create(task);

    service.tasks$.subscribe(tasks => {
      expect(tasks.find(t => t.title === task.title).id).toBeTruthy();
      done();
    });
  });
});
