import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { UpdateServicesService } from 'src/app/service/update-services.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  archived=false;
  trashed=false;
  card:any;
  trashNotes:any[];
  private allnotes:any[];
  constructor(
    private httpService:HttpService,
    private updateService:UpdateServicesService,
  
    private snackbar:MatSnackBar

  ) {
    this.updateService.changemessage(false,true);
   }

  ngOnInit() {
 this.updateService.currentNotes.subscribe(
  response=>{
    this.trashNotes=response['body']
    console.log("trash note",this.trashNotes)
  }

)

}


getNote()
  {
   this.httpService.getNotes(this.archived,this.trashed)
         .subscribe(
          (response) => {console.log("success get notes",response)
          this.allnotes = response.body; 
       
          console.log("in response",this.allnotes)
           
      if(response.body.statuscode===401){
        this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
          duration: 1000,
   });

      }
          },
            (error) => {console.log("error",error);}  
           
              
             );
             
     }

  getID(card)
  {
   console.log(card.noteId);
  }




  delete(card)
     {
       console.log(card.noteId)

       console.log("hIIIi")
       this.httpService.delete('/user/note/'+card.noteId)
       .subscribe(response =>{
        this.updateService.updateMessage();
        console.log("hello")
        if(response.body.statuscode===401)
        {
          this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
            duration: 1000,
     });
  
        }
        else{
          this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
            duration: 1000,
     });
        }
       },
       (error) => {
         console.log("error",error);
      }  
       )
       
     }



trashNote(card)
{
  console.log(card.noteId)
  this.httpService.putRequest1('/user/note/isTrash/'+card.noteId,this.card)
  .subscribe(response =>{
    this.updateService.updateMessage();
   if(response.body.statuscode===401)
   {
     this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
       duration: 1000,
});

   }
   else{
     this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
       duration: 1000,
});
   }
  },
  (error) => {
    console.log("error",error);
 }  
  )
  
}


}

