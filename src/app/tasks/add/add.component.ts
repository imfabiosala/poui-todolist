import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Task, TaskService } from '../shared';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  @ViewChild('formTask', { static:true }) formTask: NgForm

  task: Task;

  constructor(private taskService: TaskService, private router: Router) {

  }

  ngOnInit() {
    this.task = new Task(0, "", false);
  }

  add():void {
    if (this.formTask.form.valid) {
      this.taskService.add(this.task);
      this.router.navigate(['/tasks'])
    }
  }

}