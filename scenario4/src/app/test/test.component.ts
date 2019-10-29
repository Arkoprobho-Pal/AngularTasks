import { Component, OnInit, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-test',
  template: `<h1>scenario 4 : message from child to parent</h1>
            <button (click)="fireMsg()">see child msg</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

@Output() public childEvent=new EventEmitter();

fireMsg(){
  this.childEvent.emit("this is the msg from child");
}
  ngOnInit() {
  }

}
