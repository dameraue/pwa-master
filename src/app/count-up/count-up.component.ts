import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-up',
  templateUrl: './count-up.component.html',
  styleUrls: ['./count-up.component.css']
})
export class CountUpComponent {


  constructor() { }

  ngOnInit() {
  }
    
value:number = 0; 
count:string = "";
    
countUp() {
this.value = this.value +1;
this.count = "Counted " + this.value;
    }
}
