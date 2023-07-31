import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  tasks!: any[];
  constructor() {
    this.tasks=this.getTodoListFromLocalStorage();
  }
  getTodoListFromLocalStorage() {
      let stringifiedTodoList = localStorage.getItem("tasks");
      if (stringifiedTodoList === null) {
          return [];
      }
      let parsedTodoList = JSON.parse(stringifiedTodoList);
      return parsedTodoList;
  }
}
