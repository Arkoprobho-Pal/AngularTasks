import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  public grandChildMessage="";
  constructor() { }
  @Output() childEvent=new EventEmitter();
  fireEvent(msg){
    this.childEvent.emit(msg);
  }
  
  ngOnInit() {
  }

}
