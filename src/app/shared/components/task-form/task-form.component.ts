import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from '@app/shared';
import { Priority } from '@shared/models/priority/priority.model';

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.scss"]
})
export class TaskFormComponent implements OnInit, OnChanges {
  @Input() task: Task;

  @Output() saveButtonClicked = new EventEmitter();
  @Output() cancelButtonClicked = new EventEmitter();

  form: FormGroup;

  priorityLevels: Priority[] = [
    { name: "Low", value: 0 },
    { name: "Medium", value: 1 },
    { name: "High", value: 2 },
    { name: "Critical", value: 3 }
  ];

  types: string[] = ["Personal", "Business"];

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.task && changes.task.currentValue) {
      this.loadForm(changes.task.currentValue);
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(""),
      title: new FormControl(""),
      description: new FormControl(""),
      priority: new FormControl(0),
      type: new FormControl("")
    });
  }

  loadForm(task: Task) {
    this.form.patchValue({
      id: task.id || "",
      title: task.title || "",
      description: task.description || "",
      priority: task.priority || 0,
      type: task.type || ""
    });
  }

  onSaveButtonClick(form: FormGroup): void {
    this.saveButtonClicked.emit(form.value);
  }
}
