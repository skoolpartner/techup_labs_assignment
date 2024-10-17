import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  region:any = [];
  country:any = [];


  constructor() { }


  getRegions(data:any){
    for (const [key, value] of Object.entries(data)) {
      var getIndx = this.region.map(res => {
        return res.region;
      }).indexOf(value['region']);

      if(getIndx == -1){
        this.region.push(value);
      }       
    }
    data = this.region;
    return data;
  }


  getCountries(_data:any, matchVal:string){
    this.country=[];
    for (const [key, value] of Object.entries(_data)) {
      if(value['region'] == matchVal){
        this.country.push(value);
      }
    }
    _data = this.country;
    return _data; 
  }



}
