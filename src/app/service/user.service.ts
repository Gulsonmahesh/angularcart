import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urlPath } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  userRegistration(data:any): Observable<any> {
    console.log(data)
    let dob = data.dob.split('-');
    dob = `${dob[2]}-${dob[1]}-${dob[0]}`;
    let userData = {
      UserName: data.userName.toString(),
      EmailId: data.email.toString(),
      DOB:dob.toString(),
      password: data.passWord.toString(),
      mobileNo: data.mobile.toString()
    }
    return this.httpClient.post(urlPath,JSON.stringify(userData)).pipe();
  }
}
