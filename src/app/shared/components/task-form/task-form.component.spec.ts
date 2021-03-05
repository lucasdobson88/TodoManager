import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task } from '@app/shared/models';
import { of } from 'rxjs';

import { TaskFormComponent } from './task-form.component';

describe("TaskFormComponent", () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  const formValues = {
    id: "123",
    title: "Go to work",
    description: "You have to go to work by 9am",
    priority: 3,
    type: "Business"
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFormComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();

    // const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    // const compiled = fixture.nativeElement;
    // expect(compiled.querySelector(".content span").textContent).toContain(
    //   "ngPlayground app is running!"
    // );

    // const compiled = fixture.nativeElement;
    // expect(compiled.querySelector("#title").textContent).toContain("Go to work");
    // let input = fixture.debugElement.query(By.css("input"));
  });

  it("should have a filled out form", () => {
    // set up the form.

    component.loadForm(new Task(formValues));
    expect(component.form.value).toEqual(formValues);

    // check if form values are present.
    const hostElement = fixture.debugElement.nativeElement;
    let inputElement: HTMLInputElement;
    let selectElement: HTMLSelectElement;
    inputElement = hostElement.querySelector("#titleInput");
    expect(inputElement.value).toBe(formValues.title);

    inputElement = hostElement.querySelector("#description");
    expect(inputElement.value).toBe(formValues.description);

    selectElement = fixture.debugElement.nativeElement.querySelector(
      "#prioritySelectBox"
    );

    expect(selectElement.options[selectElement.selectedIndex].label).toBe(
      "Critical"
    );

    selectElement = fixture.debugElement.nativeElement.querySelector(
      "#typeSelectBox"
    );

    expect(selectElement.options[selectElement.selectedIndex].label).toBe(
      formValues.type
    );
  });

  it("should emit the form form values on save", () => {
    const saveEmitterSpy = spyOn(
      component.saveButtonClicked,
      "emit"
    ).and.callFake(() => of(formValues));
    component.loadForm(formValues);
    fixture.detectChanges();

    const saveButton = fixture.debugElement.nativeElement.querySelector(
      ".save-button"
    );

    saveButton.click();

    expect(saveEmitterSpy).toHaveBeenCalled();
    expect(saveEmitterSpy).toHaveBeenCalledWith(formValues);
  });
});
