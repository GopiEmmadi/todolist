import { Component } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  tasks!:any[];
  task!: any;
  flag: boolean=false;
  constructor(private myService: MyService){
      this.tasks=myService.tasks[1].ss;
  }
  editButton(i:number){
    this.flag=true;
    this.task=this.tasks[i];
  }
}
