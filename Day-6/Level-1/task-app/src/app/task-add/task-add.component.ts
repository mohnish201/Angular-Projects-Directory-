import { Component } from '@angular/core';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {

   newTask:Task={id:0, title:'', description:'', completed:false }
  constructor(private taskService:TaskService){}

  addTask():void{
    this.taskService.addTask(this.newTask);

    console.log(this.newTask.completed)
    this.newTask = {id:this.taskService.getTasks().length, title:'', description:'', completed:false }
  }

}
