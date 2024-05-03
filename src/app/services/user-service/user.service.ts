import { Injectable } from '@angular/core';
import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }
  loginApi(email: string, password: string) {
    const url = `/Registration/Login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
    return this.httpService.loginSignUpApiCall({}, url);
  }
  signupApi(data: any) {
    return this.httpService.loginSignUpApiCall(data, '/Registration');
  }
}
