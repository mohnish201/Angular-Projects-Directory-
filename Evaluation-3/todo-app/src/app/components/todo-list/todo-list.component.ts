import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

   public todoList:any=[]
   title: string=""
   description:string=""
   status:boolean = false
   isEdit:boolean=false

  constructor(private todoService:TodoService){}

  ngOnInit(): void {
      this.todoList = this.todoService.getTodo()
  }

  addTodo(){
    const newTodo={
      id:this.todoList.length+1,
      title: this.title,
      description:this.description ,
      status:this.status ,
      isEdit: this.isEdit
    }
    this.todoService.addTodo(newTodo)
  }

  deleteTodo(ind:number){
    this.todoService.deleteTodo(ind)
  }

  changeStatus(id:number){
    this.todoService.changeStatus(id)
    this.todoList = this.todoService.getTodo()
  }


}
