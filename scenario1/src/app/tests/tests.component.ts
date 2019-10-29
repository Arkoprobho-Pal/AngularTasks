import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  template: `<h1>this is task1 scenario1</h1>
            <input #printLog type="text">
            <button (click)="printInLog(printLog.value)">printInLog</button>`,
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  printInLog(value){
    console.log(value);
  }

}
