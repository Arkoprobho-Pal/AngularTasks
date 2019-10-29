import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`<h1>Scenario 3 : message receive by child from parent</h1>
           
           <br><br>
           <h2>{{parentMsg}}</h2> 
            `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  @Input('parentMessage') public parentMsg;
  
  ngOnInit() {
  }

}
