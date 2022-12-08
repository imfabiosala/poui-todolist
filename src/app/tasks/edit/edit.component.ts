import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Task, TaskService } from '../shared';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  @ViewChild('formTask', { static:true }) formTask: NgForm;

  task: Task;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.task = this.taskService.findById(id);
  }

  update(): void {
    if (this.formTask.form.valid) {
      this.taskService.update(this.task);
      this.router.navigate(['/tasks']);
    }
  }
}