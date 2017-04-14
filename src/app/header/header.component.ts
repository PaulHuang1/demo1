import { Title } from '@angular/platform-browser/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "保哥的網頁";

  constructor() { }

  ngOnInit() {
  }

  changeTitle(evt : MouseEvent){
    this.title = "Deom1 Title";
    console.log(evt);
    console.log(evt.clientX);
  }

}
