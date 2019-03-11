import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateServicesService {

  private allNotes2 = new BehaviorSubject([]);
  currentnotes2 = this.allNotes2.asObservable();

  private archive = false;
  private trash = false;

  constructor(private notecrud: HttpService) {

    this.notecrud.getNotes(this.archive, this.trash).subscribe(
      response => { 

       // console.log("nfhgifgi" ,response)
        this.allNotes2.next(response);
        console.log("Its works get all notes")
      },
      error => {
       
      }
    );

  
    }

    changemessage(archive: boolean, trash: boolean) {
      this.archive = archive;
      this.trash = trash;
   
      this.notecrud.getNotes(archive, trash).subscribe(
        response => {
  
          console.log(response);
          this.allNotes2.next(response);
          console.log("message Change")
        },
        error => {
          console.log(error);
        }
    
      )
    }
    }
