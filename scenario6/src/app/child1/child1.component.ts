import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `<div [ngStyle]="childStyles1">
                <h1>I am the child 1, I am Gonna Send the message to my sibling</h1>
                <button (click)="fireMessage()">Send Message</button>
            </div>`,
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  public childStyles1={
    color:"yellow",
    background:"red"
  }
  
  @Output() childEvent1= new EventEmitter();
  fireMessage(){
    this.childEvent1.emit("Hi Brother ! How are you?");
  }

  constructor() { }

  ngOnInit() {
  }

}
