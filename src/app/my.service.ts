import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  tasks: any[]=[{id:1,ss:[{name:'ece1',age:20,fname:'ece1 father'},{name:'ece2',age:25,fname:'ece2 father'}]},{id:2,ss:[{name:'cse1',age:20,fname:'cse1 father'},{name:'cse2',age:25,fname:'cse2 father'}]},{id:3,ss:[{name:'eee1',age:20,fname:'eee1 father'},{name:'eee2',age:25,fname:'eee2 father'}]}];
  task: any;
  ind!: number;
  /*
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
  */
}
