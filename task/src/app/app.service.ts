import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataDto } from './data-dto.model';


@Injectable({
  providedIn: 'root'
})
export class appService{
  private baseUrl='http://dummy.restapiexample.com/api/v1/employees';
  header: HttpHeaders;

  constructor(private httpClient: HttpClient) {

    //initialize headers
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',

    });
  }
  getData(){
    const resultObs=this.httpClient.get(this.baseUrl,{headers:this.header}).pipe();
    return resultObs;
  }
}
