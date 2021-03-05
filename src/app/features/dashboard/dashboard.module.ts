import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormModule } from '@app/shared/components/task-form/task-form.module';
import { TaskListModule } from 'app/shared';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TaskListModule,
    TaskFormModule
  ]
})
export class DashboardModule {}
