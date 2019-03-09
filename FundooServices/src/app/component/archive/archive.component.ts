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
    this.updateService.changemessage('true','false');
  }
  private allnotes: Note[];
  ngOnInit() {
  this.updateService.currentnotes2.subscribe((response:any)=>{
    this.allnotes=response['body'];

    console.log("hi");
    console.log(this.allnotes)
  })
  }

//   archiveNote()
//   {
  
//    //this.httpService.getRequest1('/user/note/list?archived=true&trashed=false')
//    this.httpService.getRequest1('/user/note/list?archived=true&trashed=false')
//    .subscribe(

//     (response) => {console.log("success archive get notes",response)
//     this.archive = response['body']; 
 
//     console.log("in response",this.archive)
     
//   if(response.body.statuscode===401){
//   this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
//     duration: 1000,
// });

// }
//     },
//       (error) => {console.log("error",error);}  
     
        
//        );
//   }

}
