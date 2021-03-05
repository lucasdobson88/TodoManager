import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TaskFormComponent } from './task-form.component';

@NgModule({
  declarations: [TaskFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [TaskFormComponent]
})
export class TaskFormModule {}
