import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  private userUrl = 'http://localhost:8081';


  postRequest(url,user): Observable <any> {
  return this.http.post(this.userUrl +url, user,{observe:'response'});
}

getRequest(email:string):any{
  return this.http.get(this.userUrl+email,{observe:'response'});
}

putRequest(url,user): any {
  return this.http.post(this.userUrl +url, user,{ 
  observe:'response'});
}




}
