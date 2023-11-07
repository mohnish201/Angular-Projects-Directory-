import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {}

  addTask(newTask: Task): void {
    this.tasks.push(newTask);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  deleteTask(ind: number): void {
    // this.tasks = this.tasks.filter((task) => task.id !== id)
    this.tasks.splice(ind, 1);
  }
}

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
