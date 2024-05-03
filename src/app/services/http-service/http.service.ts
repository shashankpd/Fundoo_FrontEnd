import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }  
    baseUrl: string = 'https://localhost:7141/api'; 
    loginSignUpApiCall(data: any, endPoint: string) {
      return this.httpClient.post(`${this.baseUrl + endPoint}`, data);
    }
  }

  

