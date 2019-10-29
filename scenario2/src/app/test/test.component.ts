import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`<h1>Scenario 2</h1>
            <input [(ngModel)]="message" type="text">
            <br><br>
            {{message}}`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public message="";
  constructor() { }
  
  ngOnInit() {
  }
  

}
