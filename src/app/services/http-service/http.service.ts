import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }  
    baseUrl: string = 'https://localhost:7141/api'; 

    Header = new HttpHeaders({
      'Accept': "application/json",
      Authorization: `Bearer ${localStorage.getItem('AuthToken')}` || ""
    })

    loginSignUpApiCall(data: any, endPoint: string) {
      return this.httpClient.post(`${this.baseUrl + endPoint}`, data);
    }

    getNoteApiCall(endPoint:string)
    {
      return this.httpClient.get(`${this.baseUrl + endPoint}`,{
        headers:this.Header
      });
    }
    createNotesApiCall(data: any, endPoint: string) {
      return this.httpClient.post(`${this.baseUrl + endPoint}`, data, {
        headers:this.Header
      });
    }

    archiveApiCall(endpoint: string) {
      return this.httpClient.patch(
        this.baseUrl + endpoint,
        {},
        { headers: this.Header }
      );
    }

    trashApiCall(endpoint: string) {
      return this.httpClient.patch(
        this.baseUrl + endpoint,
        {},
        { headers: this.Header }
      );
    }

    colorApiCall(endpoint: string, colour:string) {
      return this.httpClient.put(
        this.baseUrl + endpoint,
        {"bgcolour":colour},
        { headers: this.Header }
      );
    }

    editApiCall(endpoint: string,data:any) {
      return this.httpClient.put(
        this.baseUrl + endpoint,
        data,
        { headers: this.Header }
      );
    }
    
  }

  

