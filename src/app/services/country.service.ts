import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _http:HttpClient) { }


  getCountryList():Observable<any>{
    return this._http.get('https://api.first.org/data/v1/countries').pipe(map(res => {
      return res;
    }));
  }


}
