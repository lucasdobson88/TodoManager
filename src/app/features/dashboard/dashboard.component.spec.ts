import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TasksService } from '@app/core';
import { Task, TaskFormModule, TaskListModule } from '@app/shared';
import { of } from 'rxjs';

import { DashboardComponent } from './dashboard.component';

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const tasks = [
    new Task({
      id: "123",
      title: "Cook dinner tonight",
      description: "You need to follow the recipe on xyz.com",
      priority: 2,
      type: "Personal"
    })
  ];

  class TaskServiceStub {
    tasks$ = of(tasks);
    getAll: () => {};
    create: () => {};
    update: () => {};
    delete: () => {};
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [TaskListModule, TaskFormModule, RouterTestingModule],
      providers: [{ provide: TasksService, useValue: TaskServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should open the task form on create button click", () => {
    const element = fixture.debugElement.nativeElement.querySelector(
      ".create-button"
    );
    element.click();
    fixture.detectChanges();
    const form = fixture.debugElement.nativeElement.querySelector(
      "app-task-form"
    );
    expect(form).toBeTruthy();
  });

  it("should set the selected task to the inputed task when editTask() is called", () => {
    const setSelectedTaskSpy = spyOn(component, "setSelectedTask").and.callFake(
      task => task
    );

    component.editTask(tasks[0]);
    fixture.detectChanges();
    expect(setSelectedTaskSpy).toHaveBeenCalledWith(tasks[0]);
  });

  it("should have the tasks set correctly in the observable", done => {
    component.tasks$ = of(tasks);
    fixture.detectChanges();
    component.tasks$.subscribe(result => {
      expect(result).toEqual(tasks);
      done();
    });
  });
});
