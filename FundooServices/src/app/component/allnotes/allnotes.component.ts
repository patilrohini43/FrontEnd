import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-allnotes',
  templateUrl: './allnotes.component.html',
  styleUrls: ['./allnotes.component.scss']
})
export class AllnotesComponent implements OnInit {

  constructor(private httpService:HttpService,
    private snackbar:MatSnackBar) { }

    card:any

    @Input() allnotes:any[];
    archived=false;
    trashed=false;

  ngOnInit() {

    this.getNote();
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
       this.httpService.delete('/user/note/'+card.noteId)
       .subscribe(response =>{

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
