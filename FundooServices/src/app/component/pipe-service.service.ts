import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpService } from '../service/http.service';

@Injectable({
  providedIn: 'root'
})
export class PipeServiceService {



private message=new Subject();
currentMessage=this.message.asObservable();

  constructor(
    private httpService:HttpService

  ) { }



changedata(message:string)
{
  this.httpService.getRequest1('/user/note/search?query='+message).subscribe(
    response=>{
      console.log(response)
      this.message.next(message)
    }
  )
  
}


}
