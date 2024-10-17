import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from 'src/app/services/shared-service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.scss']
})


export class AddCustomersComponent implements OnInit {
  regionList:any=[];
  obj:any={};
  heading:string | '';
  labelArray:any | [];
  saveButtonLabel:string | '';
  public region:string[] =[];

  countries:any=[];

  constructor(private _modalService:NgbModal, private _sharedService: SharedService) { }

  ngOnInit(): void {
    this.getRegion();
  }

  close(){
    this._modalService.dismissAll({data:'close'});
  }


  regionChange(value){
    this.countries=[];
    this.countries = this._sharedService.getCountries(this.regionList, value);
  }

  // Created Shared Service to collect required data from country/region array 
  getRegion(){
    let items = this._sharedService.getRegions(this.regionList);  
    this.region = items;
  }


  formSubmit(event){
    if(event.form.status == 'INVALID'){
      return
    }
    else{
      let getStorage = localStorage.getItem('customerItem');
      if(getStorage == null || getStorage == undefined){
        localStorage.setItem('customerItem', JSON.stringify([this.obj]));
      }

      else{
        let parseData = JSON.parse(getStorage);
        parseData.push(this.obj);
        localStorage.setItem('customerItem', JSON.stringify(parseData));
      }
      
    }

    this._modalService.dismissAll({data:'success'});
  }

}
