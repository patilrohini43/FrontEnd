
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable({
  providedIn: 'root'
})
export class UpdateServicesService {

private isArchive = false;
private isTrash  = false;
labelId:any;
alllabelNote:any;
private obtainNotes = new BehaviorSubject([]);
private messagesource=new BehaviorSubject("row wrap");
currentMessage=this.messagesource.asObservable();
currentNotes = this.obtainNotes.asObservable();

storeData=this.obtainNotes.asObservable();
constructor(private httpService: HttpService){
  console.log('update card constructor');
this.httpService.getNotes(this.isArchive,this.isTrash).subscribe(
  response=>{
    this.obtainNotes.next(response);
    console.log(this.currentNotes);
  }
  // error=>
  // {

  // }
)  
}

  updateMessage(){
      this.httpService.getNotes(this.isArchive,this.isTrash).subscribe(
        response=>
        {

          console.log("update messgae",response)
          this.obtainNotes.next(response);
        }

      );
  }

  changedata(message:string)
  {
    this.messagesource.next(message);
  }



  
changemessage(archive: boolean, trash: boolean ){
  this.isArchive = archive;
  this.isTrash = trash;
  this.httpService.getNotes(archive, trash).subscribe(
    response => {

      console.log(response);
          this.obtainNotes.next(response);
    },
    error => {
      console.log(error);
    }
    );
  }
labelName:any

  labelNotes(label:any)
  {
    this.labelId=label;
    this.httpService.getLabel('/user/label/labelNote?labelId='+this.labelId)
    .subscribe(response=>{
      this.obtainNotes.next(response)
      console.log(response);
    })
  }
}
