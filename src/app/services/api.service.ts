import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getFlags(){
    return this.http.get('https://restcountries.com/v2/alpha?codes=col,ao,np,tr,us');
  }
}
