import { Component } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  tasks!:any[];
  task!: any;
  flag: boolean=false;
  constructor(private myService: MyService){
      this.tasks=myService.tasks[2].ss;
  }
  editButton(i:number){
    this.flag=true;
    this.task=this.tasks[i];
    /*
    this.myService.ind=i;
    this.myService.task=this.myService.tasks[i];
    this.route.navigate(['/edit']);
    */
  }
}
