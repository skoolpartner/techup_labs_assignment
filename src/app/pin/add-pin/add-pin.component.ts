import { Component, HostListener, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader } from 'ng2-file-upload';
import { SharedService } from 'src/app/services/shared-service';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-add-pin',
  templateUrl: './add-pin.component.html',
  styleUrls: ['./add-pin.component.scss']
})
export class AddPinComponent implements OnInit {
  heading:string;
  obj:any = {};
  public items:string[]=[];
  
  // File Upload
  public uploader:FileUploader = new FileUploader({url: URL});
  fileName:string = 'Darg and Drop File';

  public dropped(file:any):void {
    this.fileName = file[0].name;

    var base64String;
    let files = file[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      base64String = reader.result as string;
      this.obj.image = base64String;

    }
    if (files) {
      reader.readAsDataURL(files);      
    }
  }
  // File Upload

  


  constructor(private activeModalService: NgbActiveModal, private _sharedService:SharedService) { }

  
  ngOnInit(): void { 
    let item = localStorage.getItem('customerItem');
    let array = JSON.parse(item);
    this.items = array;
  }

  close(){
    this.activeModalService.close({data:'close'})
  }

  selectFile(event){
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
