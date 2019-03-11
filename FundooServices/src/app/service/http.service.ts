import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notedto } from '../model/createnote';


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
  return this.http.put(this.userUrl +url, user,{ 
  observe:'response'});
}

postRequest1(url,notedto:Notedto):  any {
  return this.http.post(this.userUrl+url, notedto,{
    headers:new HttpHeaders().set("jwt_token",localStorage.getItem("token")), 
  observe:'response'});
}

getRequest1(url): any {
  return this.http.get(this.userUrl+url,{
    headers:new HttpHeaders().set("jwt_token",localStorage.getItem("token")), 
  observe:'response'});
}


putRequest1(url,notedto:Notedto):  any {
  return this.http.put(this.userUrl+url, notedto,{
    headers:new HttpHeaders().set("jwt_token",localStorage.getItem("token")), 
  observe:'response'});
}


delete(url): any {
  return this.http.delete(this.userUrl+url,{
    headers:new HttpHeaders().set("jwt_token",localStorage.getItem("token")), 
  observe:'response'});
}

// PutData(url): any {
//   return this.http.delete(this.userUrl+url,{
//     headers:new HttpHeaders().set("jwt_token",localStorage.getItem("token")), 
//   observe:'response'});
// }


put(url):  any {
  return this.http.put(this.userUrl+url,{
    headers:new HttpHeaders().set("jwt_token",localStorage.getItem("token")), 
  observe:'response'});
}

private userUrl1 = 'http://localhost:8081/user/note/list';
getNotes(archived, trashed):Observable<any>
{
  console.log(this.userUrl1+"?archived="+archived+"&trashed="+trashed);
  return this.http.get(this.userUrl1+"?archived="+archived+"&trashed="+trashed,{

    headers:new HttpHeaders().set("jwt_token",localStorage.getItem("token")), 
    observe:'response'
  });
}



}
