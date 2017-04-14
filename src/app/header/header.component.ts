import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  title = "保哥的網頁";

  constructor() { }

  ngOnInit() {
  }

  counter = 0;

  changeTitle(evt : MouseEvent){
    this.title = "Deom1 Title";
    this.counter++;
    console.log(evt);
    console.log(evt.clientX);
  }


  is_h3_highlight = false;

  getStyle(){
    return {"background-color": "yellow"};
  }
}
