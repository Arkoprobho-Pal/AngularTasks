import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `<div [ngStyle]="childStyles2">
                <h1>I am the Second Child</h1>
                <h2> Message from Sibling >> {{chMessage}}</h2>
            </div>`,
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  childStyles2={
    color:"pink",
    background:"teal"
  }
  constructor() { }
  @Input('DataFromParent') public chMessage;
  ngOnInit() {
  }

}
