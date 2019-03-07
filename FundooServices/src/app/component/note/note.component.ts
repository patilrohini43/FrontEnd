import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material';
import { A11yModule } from '@angular/cdk/a11y';
import { Notedto } from 'src/app/model/createnote';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  deleteData: { "isDeleted": boolean; "noteIdList": any[]; };
  archivevalue=false;
  archiveData: { "isArchived": boolean; "noteIdList": any[]; };
  cardArray:any;
  pinValue= false;
  isActive = false;
  id:any;
  data:any;
  note:Notedto=new Notedto();
  no

  colorCode: Array<Object> = [
    { name: "white", colorCode: "#fff" },
    { name: "red", colorCode: "#fc8981" },
    { name: "orange", colorCode: "#ffb834" },
    { name: "yellow", colorCode: "#fff181" },
    { name: "green", colorCode: "#c5fd98" },
    { name: "teal", colorCode: "#96ffec" },
    { name: "blue", colorCode: "#c4f0f7" },
    { name: "darkblue", colorCode: "#a6cbf7" },
    { name: "purple", colorCode: "#d9aff7" },
    { name: "pink", colorCode: "#ffcee6" },
    { name: "brown", colorCode: "#e9c7a9" },
    { name: "gray", colorCode: "#e7e9ec" }
    ]
    color: string
    carddata=this.data;
  constructor(
   private httpService:HttpService,
   private snackbar:MatSnackBar,
  ) { }

  ngOnInit() {
    this.getNote();
  }


  changeColor(color) {

    this.color = color;
    console.log(this.color);
    }


    getID(card)
    {
     console.log(card.noteId);
    }


    getNote()
  {
     this.httpService.getRequest1('/user/note/list')
         .subscribe(

          (response) => {console.log("success get notes",response)
          this.data = response['body']; 
       
          console.log("in response",this.data)
           
      if(response.body.statuscode===401){
        this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
          duration: 1000,
   });

      }
          },
            (error) => {console.log("error",error);}  
           
              
             );
             
     }



    

}
