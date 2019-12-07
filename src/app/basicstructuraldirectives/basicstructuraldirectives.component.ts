import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicstructuraldirectives',
  templateUrl: './basicstructuraldirectives.component.html',
  styleUrls: ['./basicstructuraldirectives.component.css']
})
export class BasicstructuraldirectivesComponent implements OnInit {

  visible:boolean=true;
  successmsg:string="students added successfully";

  myname:string="mahesh";

  constructor() { }

  ngOnInit() {
  }

  changevalue(){
    this.visible=!this.visible;
  }

}
