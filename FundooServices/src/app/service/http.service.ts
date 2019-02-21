import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  private userUrl = 'http://localhost:8081';


  postRequest(url,user): Observable <any> {
  return this.http.post(this.userUrl +url, user,{responseType:'text'});
}

getRequest(email:string):any{
  return this.http.get(this.userUrl+email,{responseType:'text'});
}


}
