import { Injectable } from '@angular/core';

import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  public key: string = 'tasks';

  constructor() { }

  listAll(): Task[] {
    let tasks = localStorage[this.key];
    if (tasks) {
      return JSON.parse(tasks);
    } else {
      return [];
    }
  }

  add(task: Task): void {
    let tasks = this.listAll();
    task.id = tasks.length + 1;
    tasks.push(task);
    localStorage[this.key] = JSON.stringify(tasks);
  }

  update(task: Task): void {
    let tasks: Task[] = this.listAll();
    tasks.forEach((obj, index, objs) => {
      if (task.id === obj.id) {
        objs[index] = task;
      }
    });
    localStorage[this.key] = JSON.stringify(tasks);
  }

  changeStatus(id: number): void {
    let tasks = this.listAll();
    tasks.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].done = !obj.done;
      }
    });
    localStorage[this.key] = JSON.stringify(tasks);
  }
}