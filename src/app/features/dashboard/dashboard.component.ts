import { Component, OnInit } from '@angular/core';
import { TasksService } from 'app/core/services/tasks/tasks.service';
import { Task } from 'app/shared';
import { Observable } from 'rxjs';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  tasks$: Observable<Task[]> = this.taskService.tasks$;
  createFormOpen: boolean = false;
  selectedTask: Task = null;
  constructor(private taskService: TasksService) {}

  ngOnInit(): void {}

  editTask(task: Task): void {
    this.setSelectedTask(task);
    this.createFormOpen = true;
  }

  deleteTask(id: string): void {
    this.taskService.delete(id);
  }

  toggleForm(): void {
    this.createFormOpen = !this.createFormOpen;
  }

  saveTask(task): void {
    if (task.id) {
      this.taskService.update(task);
    } else {
      this.taskService.create(task);
    }
    this.setSelectedTask(null);
  }

  setSelectedTask(task: Task): void {
    this.selectedTask = task;
  }
}
