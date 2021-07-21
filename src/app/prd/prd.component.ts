import { Component, Input, OnInit, Output, EventEmitter, APP_ID } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { fakeData } from './listPrd';

@Component({
  selector: 'app-prd',
  templateUrl: './prd.component.html',
  styleUrls: ['./prd.component.css']
})
export class PrdComponent implements OnInit {

  formData!: FormGroup;
  list = fakeData;
  constructor() { }
  name: any;
  Prodct = {id: 0, name: "", gia: 0}

  ngOnInit(): void {
    this.formData = new FormGroup({
      id: new FormControl(Validators.required),
      name: new FormControl(),
      gia: new FormControl()
    });
    
  }
  
  onSelect(){

  }
  currentID = 1;
  removeItem(id: number) {
    this.list.splice(id, 1)
  }
test(){
}
  add(){
    this.list.push(this.formData.value)
  }
  edit(id: number){
    this.Prodct = this.list[id]
    
  }
  Search(){

  }
}
