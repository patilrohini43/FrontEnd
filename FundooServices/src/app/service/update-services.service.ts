// import { Injectable } from '@angular/core';
// import { HttpService } from './http.service';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UpdateServicesService {

//   private allNotes2 = new BehaviorSubject([]);
//   currentnotes2 = this.allNotes2.asObservable();

//   private archive = false;
//   private trash = false;

//   constructor(private notecrud: HttpService) {

//     this.notecrud.getNotes(this.archive, this.trash).subscribe(
//       response => { 

//         this.allNotes2.next(response);
//         console.log(this.currentnotes2)
//         console.log("Its works get all notes")
//       },
//       error => {
       
//       }
//     )

//     }


//     updateMessage()
    
//       {

//         this.notecrud.getNotes(this.archive, this.trash).subscribe(
//           response => { 
    
//             this.allNotes2.next(response);
//             console.log(this.currentnotes2)
//             console.log("Its works get all notes")
//           },
//           error => {
           
//           }
//         );
    
//         }
    

//     changemessage(archive: boolean, trash: boolean) {
//       this.archive = archive;
//       this.trash = trash;
//       console.log("archiv enter")
//       this.notecrud.getNotes(archive, trash).subscribe(
//         response => {
//           console.log("chaange message start")
//           console.log(response);
//          this.allNotes2.next(response);
//           console.log("message Change",this.allNotes2.next(response))
//           console.log(this.currentnotes2);
//         },
//         error => {
//           console.log(error);
//         }
    
//       )
//     }
//     }



import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class UpdateServicesService {

private isArchive = false;
private isTrash  = false;

private obtainNotes = new BehaviorSubject([]);

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
          this.obtainNotes.next(response);
        }

      );
  }

changemessage(archive: boolean, trash: boolean ){
  this.isArchive = archive;
  this.isTrash = trash;
  this.httpService.getNotes(archive, trash).subscribe(
    response => {

      console.log(response);
    //  this.storeData.next(response);
;      this.obtainNotes.next(response);
    },
    error => {
      console.log(error);
    }
    );
  }
}