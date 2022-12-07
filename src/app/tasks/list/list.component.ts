import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.listAll();
  }

  listAll(): Task[] {
    return this.taskService.listAll();
  }

}