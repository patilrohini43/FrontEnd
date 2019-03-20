import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material';
import { UpdateServicesService } from 'src/app/service/update-services.service';
import { AllNotes } from 'src/app/model/allNotes';
import { Note } from 'src/app/model/note';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(
    private httpService:HttpService,
    private snackbar:MatSnackBar,
    private updateService:UpdateServicesService

  ) {

    console.log("click on archive message")
    this.updateService.changemessage(true,false);
  }
  private allnotes:any[];

  

  ngOnInit() {

  // this.httpService.getNotes(true,false)
  // .subscribe(response=>{

  //   this.allnotes=response['body']

    
    

  // }
  // )
  this.updateService.currentNotes.subscribe(
    response=>{

      this.allnotes=response['body']
      
      console.log("getting notes",this.allnotes)
    },
  )

  }
   

}
