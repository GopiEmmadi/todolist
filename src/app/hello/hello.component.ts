import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MyService} from '../my.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  tasks!:any[];
  task!: any;
  flag: boolean=true;
  constructor(private myService: MyService,private route:Router){
      this.tasks=myService.tasks;
  }
  ngAfterViewChecked(){
    this.flag=true;
  }
  /*
  change(){
    this.route.navigate(['/form']);
  }
  */
  detailsButton(i: number){
    this.task=this.tasks[i];
    this.flag=!this.flag;
  }
  completeButton(i: number){
    this.myService.tasks.splice(i,1);
    localStorage.setItem("tasks",JSON.stringify(this.myService.tasks));
  }
}
