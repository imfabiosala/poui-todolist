import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskService } from './shared';
import { ListComponent } from './list';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TaskService
  ]
})

export class TasksModule { }