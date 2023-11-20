import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todoList=[{id:1, title:"Learn HTML", description:"Learning semantic tags", status:false, isedit:false},
  {id:2, title:"Learn JAVA", description:"Learning For loop", status:false, isedit:false},
  {id:3, title:"Learn Python", description:"Learning Flask", status:false, isedit:false},
]
  constructor() { }

  getTodo(){
   return this.todoList
  }

  addTodo(todo:any){
    this.todoList.push(todo)
  }

  deleteTodo(ind:number){
    this.todoList.splice(ind, 1)
  }

  changeStatus(id:number){

    const updatedTodo = this.todoList.map((el) => el.id===id? {...el, status:!el.status}: el)
    console.log(updatedTodo)
    this.todoList = [...updatedTodo]
  }
}
