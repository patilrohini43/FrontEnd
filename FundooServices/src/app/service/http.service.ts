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


putRequest1(url,notedto):  any {
  return this.http.put(this.userUrl+url, notedto,{
    headers:new HttpHeaders().set("jwt_token",localStorage.getItem("token")), 
  observe:'response'});
}


putRequest2(url):  any {
  return this.http.put(this.userUrl+url,{
    headers:new HttpHeaders().set("jwt_token",localStorage.getItem("token")), 
  observe:'response'});
}

delete(url): any {
  return this.http.delete(this.userUrl+url,{
    headers:new HttpHeaders().set("jwt_token",localStorage.getItem("token")), 
  observe:'response'});
}


put(url,pin):  any {
  return this.http.put(this.userUrl+url+"?pin="+pin,{
    headers:new HttpHeaders().set("jwt_token",localStorage.getItem("token")), 
     observe:'response'
});
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

getLabel(url):Observable<any>{

console.log(this.userUrl);
  return this.http.get(this.userUrl+url,{

    headers:new HttpHeaders().set("jwt_token",localStorage.getItem("token")), 
    observe:'response'
  });
}



getLabel1(labelId:any):Observable<any>{

  console.log(this.userUrl);

    return this.http.get('http://localhost:8081/user/label/labelNote?labelId='+labelId,{
  
      headers:new HttpHeaders().set("jwt_token",localStorage.getItem("token")), 
      observe:'response'
    });
  }
  
postRequest2(url,noteId):  any {
  return this.http.post(this.userUrl+url,{
  observe:'response'});
}



addLabel(url,noteId,labelId):  any {
  return this.http.post(this.userUrl+url+"?noteId="+noteId+"&labelId="+labelId ,{
    headers:new HttpHeaders().set("jwt_token",localStorage.getItem("token")), 
  observe:'response'});
}

public loggIn()
{
return !!localStorage.getItem("token");

}

public uploadProfileImage(url,file: File):any
{
  let formdata: FormData = new FormData();
  formdata.append('File',file);
  return this.http.put(this.userUrl+url,formdata,{
    headers:new HttpHeaders().set("jwt_token",localStorage.getItem("token")), 
  observe:'response'});
}

}
