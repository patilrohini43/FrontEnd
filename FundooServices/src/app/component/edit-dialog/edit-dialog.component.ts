import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { Notedto } from 'src/app/model/createnote';
import { HttpService } from 'src/app/service/http.service';
import { Note } from 'src/app/model/note';
import { FormControl } from '@angular/forms';
import { UpdateServicesService } from 'src/app/service/update-services.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent {

//   private colors:string[][]=[["Blue","Green", "Red","Orange"],
//   ["Violet", "Indigo", "Yellow ","pink"],

// ]
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
  color:string; 
  resp:any;
  visible = true;
  selectable = true;
  removable = true;
data1:any
archived:boolean=false
  trashed:boolean=false
labelArray:any
title= new FormControl('')
description=new FormControl('')
noteId=new FormControl('')
  
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Notedto,
    private httpService:HttpService,
    private snackbar:MatSnackBar,
    private updateService:UpdateServicesService) {

    


      this.updateService.changemessage(false,false);
      this.updateService.currentNotes.subscribe(response=>{
        console.log(response);
        this.resp=response;
      })
     }
  // pined=new Array<Note>();
  // others=new Array<Note>();
  // fullNotes(){
  //   this.data.filter(note=>note.pin===true&&note.archive===false&& note.trash===false).map(note=>this.pined.push(note));
  // }
  
  
    ngOnInit() {
    // this.getNote();
    this.updateService.currentNotes.subscribe(response=>{
      this.resp=response['body'];
      console.log(this.data);
    })
    ;
     
     
    }


  
  onNoClick(): void {
    this.dialogRef.close();
  }
  // changeColor(singlecolor:string) {

  //   console.log(singlecolor);
  // }

  getId(id)
  {
    this.data.noteId
  }


  changeColor(color) {
   // this.color = color;
    this.data.color=color;
     }

  updateNote(data)
 {
  this.data1={
    "title":this.title.value,
    "description":this.description.value,
    'noteId':this.data.noteId,
    "color":this.data.color
  }
  console.log(this.data1)

     this.httpService.putRequest1('/user/note/update/'+this.data.noteId,this.data1)
     .subscribe(response =>{
       console.log(response.body)
       if(response.body.statusCode == 401){
        this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
          duration: 1000,
   });
       
       }
     else 

       {
          console.log(response.body.statusMessage)
         this.snackbar.open(response.body.statusMessage +'Invalid !!', 'End now', {
           duration: 1000,
    });
       }
     })
     this.dialogRef.close();
    }



    archiveNote(data)
    {
      //card.archive=true;
   //   card.trash=false;
      console.log("archive work start")
    //  console.log(card.noteId)
      console.log("hii")
      this.httpService.putRequest1('/user/noted/'+data.noteId,this.data)
      .subscribe(response =>{
       this.updateService.updateMessage()
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
     }  ,
    
    
      );
    
      
    }
    
   
  

}



