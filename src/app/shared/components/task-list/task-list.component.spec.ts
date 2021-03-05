import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Task } from '@app/shared/models';

import { TaskListComponent } from './task-list.component';

describe("TaskListComponent", () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  const tasks = [
    new Task({
      id: "123",
      title: "Go to work",
      description: "You have to go to work by 9am",
      priority: 3,
      type: "Business"
    })
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      imports: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    component.tasks = tasks;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display data in the UI", () => {
    let element = fixture.debugElement.nativeElement.querySelector(
      ".card-title"
    );
    expect(element.textContent).toBe(tasks[0].title);
    element = fixture.debugElement.nativeElement.querySelector(".card-text");
    expect(element.textContent).toBe(tasks[0].description);
  });

  it("should emit the task when edit button is clicked", () => {
    const editButtonClickedSpy = spyOn(
      component.editButtonClicked,
      "emit"
    ).and.callThrough();
    const editButton = fixture.debugElement.nativeElement.querySelector(
      ".edit-button"
    );
    editButton.click();

    expect(editButtonClickedSpy).toHaveBeenCalledWith(component.tasks[0]);
  });

  it("should emit the task id when delete button is clicked", () => {
    const deleteButtonClickedSpy = spyOn(
      component.deleteButtonClicked,
      "emit"
    ).and.callThrough();
    const deleteButton = fixture.debugElement.nativeElement.querySelector(
      ".delete-button"
    );
    deleteButton.click();

    expect(deleteButtonClickedSpy).toHaveBeenCalledWith(component.tasks[0].id);
  });
});
