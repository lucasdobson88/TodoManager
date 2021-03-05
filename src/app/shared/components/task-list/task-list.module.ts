import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TaskListComponent } from './task-list.component';

@NgModule({
  declarations: [TaskListComponent],
  imports: [CommonModule],
  exports: [TaskListComponent]
})
export class TaskListModule {}
