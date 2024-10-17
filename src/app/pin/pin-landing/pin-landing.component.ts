import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pin-landing',
  templateUrl: './pin-landing.component.html',
  styleUrls: ['./pin-landing.component.scss']
})
export class PinLandingComponent implements OnInit {

  pageHeading:string = 'List of Pins';
  buttonTop:string = 'Add Customer';
  buttonInline:string = 'Add Pin';
  obj:any = {};
  tableArray:any = [];
  tableHeadings:any = ['Title', 'Image', 'Collaboratory', 'Privacy'];
  
  constructor() { }

  ngOnInit(): void {
    debugger
    let pinList =  localStorage.getItem('pinItem');
    
    if(pinList == undefined || pinList == null){
      this.tableArray = []
    }
    else{
      let parseList = JSON.parse(pinList);
      this.tableArray = parseList;
    }
  }

}
