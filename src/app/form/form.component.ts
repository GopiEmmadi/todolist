import { Component } from '@angular/core';
import {MyService} from '../my.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  flag:boolean=true;
  constructor(private myService:MyService){
  }
  newTask = { name: '', description: '', dueDate: '', completed: false };

  addTask(taskName: string, description: string, dueDate: string) {
    if (taskName.trim() && description.trim() && dueDate) {
      const newTask = {
        name: taskName,
        description: description,
        dueDate: new Date(dueDate), // Convert the dueDate string to a Date object
        completed: false,
      };
      this.flag = !this.flag;
      this.myService.tasks.push(newTask);
      localStorage.setItem("tasks",JSON.stringify(this.myService.tasks));
      this.newTask = { name: '', description: '', dueDate: '', completed: false };
    }
  }

  change() {
    this.flag = !this.flag;
  }
}
