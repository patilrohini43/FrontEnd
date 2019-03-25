import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material';

import { AllNotes } from 'src/app/model/allNotes';


import { A11yModule } from '@angular/cdk/a11y';
import { Notedto } from 'src/app/model/createnote';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Note } from 'src/app/model/note';
import { FormControl, Validators } from '@angular/forms';
import { isLabeledStatement } from 'typescript';
import { EditDialogLabelComponent } from '../edit-dialog-label/edit-dialog-label.component';
import { UpdateServicesService } from 'src/app/service/update-services.service';

import { ChildActivationEnd } from '@angular/router';

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


   deleteData: { "isDeleted": boolean; "noteIdList": any[]; };
   archivevalue=false;
   archiveData: { "isArchived": boolean; "noteIdList": any[]; };
   cardArray:any;
   pin= false;
   isActive = false;
   id:any;
   data1:any;
   label:any;
   labelIddata:any;
   labelArray:any;
   labelName=new FormControl('',[Validators.required])
   @Input() data:any[];
 
   note:Notedto=new Notedto();
   
 
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
   card:any
 noteLabel:any;
    archived:boolean=false
   trashed:boolean=false
   //carddata=this.data;
  
 // pined=new Array<Note>();
 // others=new Array<Note>();
 // fullNotes(){
 //   this.data.filter(note=>note.pin===true&&note.archive===false&& note.trash===false).map(note=>this.pined.push(note));
 // }
 
 
 
 
   changeColor(color) {
 
     this.color = color;
     console.log(this.color);
     }
 
 
     getID(card)
     {
      console.log(card.noteId);
     }
 
 
     getid(note){
       console.log(note);
       console.log(note.labelId);
       this.labelIddata=note.labelId
       
     }
 
 
 
 
     getNote()
   {
      this.httpService.getNotes(this.archived,this.trashed)
          .subscribe(
           (response) => {console.log("success get notes",response)
           this.data = response['body']; 
             console.log("data-->",this.data);
       
            
       if(response.body.statuscode===401){
         this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
           duration: 1000,
    });
    
 
       }
           },
             (error) => {console.log("error",error);}  
            
               
              );
              
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
     // this.updateService.updateMessage();
    
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
     
 
      isPin(card)
      {
 
        this.pin=!this.pin
        console.log(card.noteId)
        this.httpService.putRequest1('/user/note/isPin/'+card.noteId+'?pin='+this.pin,this.card)
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
 
 
 
 archiveNote(card)
 {
   card.archive=true;
   card.trash=false;
   console.log("archive work start")
   console.log(card.noteId)
   console.log("hii")
   this.httpService.putRequest1('/user/noted/'+card.noteId,this.card)
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
  }  ,
 
 this.updateService.updateMessage()
   );
 
   
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
  }  ,
  //this.updateService.updateMessage()
   )
   
 }
 
 
    //   openDialog(data): void {
    //    const dialogRef = this.dialog.open( EditDialogComponent, {
    //      width: '700px',
    //      height:'200px',
    //      data: {
    //      id: data.id,
    //      title: data.title,
    //      description:data.description,
    //      color:data.color,
    //      noteId:data.noteId,
 
    //  }
    //    });
   
    //    dialogRef.afterClosed().subscribe(result => {
    //      console.log('The dialog was closed');
       
    //    });
    //  }
 
 
 
 
   
   
 
     addLabel(note1)
     {
   
   // this.httpService.postRequest2('/user/note/addLabelToNote?labelId=240&noteId=156')
   console.log(note1);
   console.log(note1.labelId);
   console.log(note1.noteId)
   this.httpService.postRequest2('/user/note/addLabelToNote?labelId='+this.labelIddata+'&noteId='+note1.noteId,this.card)
      .subscribe(response=>{
        console.log(response)
        this.getNote();
                   if(response.body.statusCode === 401){
 
                   this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
                     duration: 1000,
              });
              this.getNote();
           
                  }
                else 
     
                  {
                     console.log(response.body.statusMessage)
                    this.snackbar.open(response.body.statusMessage +'Invalid !!', 'End now', {
                      duration: 1000,
               });
                  }
                 
                 
              },
                error => {
              //    
              console.log(error);
             
                 
                });
                
     }
 
 
 
     getLabel()
     {
     
      this.httpService.getLabel('/user/label/list')
      .subscribe(response=>{
        console.log(response);
        this.labelArray=response['body'];
        console.log(this.labelArray);
       
                  },
                 
                error => {
           
              console.log(error);
             
                
                });
                
     }
 
 
 //     addLabel(card)
 // {
 
 
 //   this.label={
 
 //     "labelName":this.labelName.value,
 //   }
 //   console.log(this.label)
 //  this.httpService.postRequest1('/user/note/createLabel/'+card.noteId,this.label)
 //  .subscribe(response=>{
 //    console.log(response)
 
    
    
 //  })
 // }
 
 
   onEvent(event) {
     event.stopPropagation();
  }
 
 

























   

}
