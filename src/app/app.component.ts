import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  keyword = "";

  constructor(public dataservice: DataService, private http:Http) {
    this.http.get('/api/articles.json')
      .subscribe(res => {
        this.data = res.json();
      })
   }

  changeKeyword(keyword){
    this.keyword = keyword;
  }

  clearKeyword($event : KeyboardEvent){
      this.keyword = "";
  }

  data : any;
}
