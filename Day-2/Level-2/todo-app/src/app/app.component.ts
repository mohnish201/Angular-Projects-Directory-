import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = '';
  description: string = "";
  status: boolean = false;
  edit: boolean = false;
  selectedTodoId: number | null = null;


  todoList: Todo[] = [{
    id: 1, title: "Learn HTML", description: "Learn Semantic Tags", status: false, editing: false
  }, { id: 2, title: "Learn React", description: "Starting with useState", status: false, editing: false }, { id: 3, title: "Learn CSS", description: "Learn CSS Specificity", status: false, editing: false }]


  addTodo() {

    this.todoList.push({
      id: this.todoList.length + 1,
      title: this.title,
      description: this.description,
      status: this.status,
      editing: false
    })

    this.edit = false;
    this.title = '';
    this.description = '';
  }

  editTodo(todo: Todo) {
    this.edit = true;
    this.title = todo.title;
    this.description = todo.description;
  }
  toggleEdit(todo: Todo) {
    todo.editing = !todo.editing;
  }

  saveTodo(todo: Todo) {
    // Add any additional validation or logic if needed
    todo.editing = false;
  }


  completed(id: number) {

    const todo = this.todoList.find(el => el.id == id)

    if (todo) {
      this.todoList = this.todoList.map(el => el.id === id ? { ...el, status: !el.status } : el)
    }



  }

  deleteTodo(ind: number) {

    this.todoList.splice(ind, 1)
  }

}


export interface Todo {
  id: number,
  title: string,
  description: string,
  status: boolean,
  editing: boolean
}