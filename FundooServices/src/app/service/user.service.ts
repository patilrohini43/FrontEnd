import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{User} from 'src/app/model/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private userUrl = 'http://localhost:8081/';

  //public registerUser(user: User) :any {
    
   // return this.http.post<User>(this.userUrl+'register',user);
   
//}

  registerUser1(user): Observable <any> {
  return this.http.post<User>(this.userUrl+'register', user);
}
}
