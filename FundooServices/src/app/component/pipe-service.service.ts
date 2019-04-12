import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PipeServiceService {



private message=new Subject();
currentMessage=this.message.asObservable();

  constructor(

  ) { }


changedata(message:string)
{
this.message.next(message) 
}

}
