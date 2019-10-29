import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-grand-child-component',
  template: `<div [ngStyle]="grandChildStyles">
            <h1>I am the Grand ChildChild</h1>
             <h2> button to send message to grandparent</h2>
            <button (click)="fireMessage()">send</button>
            </div>`,
  styleUrls: ['./grand-child-component.component.css']
})
export class GrandChildComponentComponent implements OnInit {

  constructor() { }
  public grandChildStyles={
    color:"red",
    background:"teal"
  }

  @Output() grandChildEvent=new EventEmitter();
   
  fireMessage(){
    this.grandChildEvent.emit("hi GrandPa ! How are you?");
  }
  
  
  ngOnInit() {
  }

}
