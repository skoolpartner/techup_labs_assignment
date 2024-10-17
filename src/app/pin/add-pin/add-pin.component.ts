import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-pin',
  templateUrl: './add-pin.component.html',
  styleUrls: ['./add-pin.component.scss']
})
export class AddPinComponent implements OnInit {
  heading:string;
  obj:any = {};
  public items:string[]=[];

  constructor(private activeModalService: NgbActiveModal) { }

  ngOnInit(): void { 
    let item = localStorage.getItem('customerItem');
    let array = JSON.parse(item);
    this.items = array;
  }

  close(){
    this.activeModalService.close({data:'close'})
  }

  savePin(event){
    if(event.form.status == 'INVALID'){
       return
    }
    else{
      let getStorage = localStorage.getItem('pinItem');
      if(getStorage == null || getStorage == undefined){
        localStorage.setItem('pinItem', JSON.stringify([this.obj]));
      }

      else{
        let parseData = JSON.parse(getStorage);
        parseData.push(this.obj);
        localStorage.setItem('pinItem', JSON.stringify(parseData));
      }
    }

    this.activeModalService.close({data:'success'})
  }

}
