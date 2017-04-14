import { DataService } from './../data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  //providers[dataService] 產生只在此component用的Dataservice
})
export class HeaderComponent implements OnInit {

  constructor(public dataservice: DataService) {
   }

  ngOnInit() {
  }

  counter = 0;

  changeTitle(evt : MouseEvent){
    this.dataservice.title = "Deom1 Title";
    this.counter++;
    console.log(evt);
    console.log(evt.clientX);
  }


  is_h3_highlight = false;

  getStyle(){
    return {"background-color": "yellow"};
  }
}
