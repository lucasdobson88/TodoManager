import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Task } from '../../models/task/task.model';

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"]
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[] = [];

  @Output() editButtonClicked = new EventEmitter();
  @Output() deleteButtonClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onEditButtonClick(task: Task): void {
    this.editButtonClicked.emit(task);
  }

  onDeleteButtonClick(id: string): void {
    this.deleteButtonClicked.emit(id);
  }
}
