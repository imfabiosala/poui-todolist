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

  remove($event: any, task: Task): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa ' + task.name + '?')) {
      this.taskService.remove(task.id);
      this.tasks = this.taskService.listAll();
    }
  }

}