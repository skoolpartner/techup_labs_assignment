import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPinComponent } from '../add-pin/add-pin.component';
import { AddCustomersComponent } from 'src/app/customers/add-customers/add-customers.component';
import { SharedService } from 'src/app/services/shared-service';

@Component({
  selector: 'app-pin-list',
  templateUrl: './pin-list.component.html',
  styleUrls: ['./pin-list.component.scss']
})
export class PinListComponent implements OnInit {
  countryList:any=[];
  @Input() pageHeading:any | '';
  @Input() buttonTop:string | '';
  @Input() buttonInline:string | '';
  @Input() tableHeadings:any | '';
  @Input() tableArray:any | [];
  
  
  constructor(private _countryService: CountryService, private _modalService: NgbModal, private _sharedService: SharedService) { }

  ngOnInit(): void {
    this._countryService.getCountryList().subscribe(res => {
      this.countryList = res;
    })
  }

  addPin(val){
    let modalRef = this._modalService.open(AddPinComponent, {
      backdrop:'static',
      size:'md'
    });
    modalRef.componentInstance.heading = val;

    modalRef.result.then(res=>{
      if(res.data != 'close'){
        debugger
        let getStorage = localStorage.getItem('pinItem');
        let parseData = JSON.parse(getStorage);
        this.tableArray = parseData;

        // this.tableArray = );
      }
    })
  }




  addCustomers(val){
    let modalRef = this._modalService.open(AddCustomersComponent, {
      backdrop:'static',
      size:'md'
    });
    
    // We can paas dynamic value to this component as per our requirement
    modalRef.componentInstance.heading = val;
    modalRef.componentInstance.labelArray = ['Title', 'Email', 'Region', 'Country'];
    modalRef.componentInstance.saveButtonLabel = ['Save Customer'];
    modalRef.componentInstance.regionList = this.countryList.data;

  }

}
