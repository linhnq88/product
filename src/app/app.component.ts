import { Component, OnInit } from '@angular/core';
import { fakeData } from './prd/listPrd';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list = fakeData;
  title = 'product';


  idItem!: number;
  idFromChild!: number;
  ngOnInit() {
    const newId = this.idItem
  }

  
}
