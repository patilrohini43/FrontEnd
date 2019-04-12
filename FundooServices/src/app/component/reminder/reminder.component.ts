
import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { A11yModule } from '@angular/cdk/a11y';
import { Notedto } from 'src/app/model/createnote';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { Note } from 'src/app/model/note';
import { FormControl, Validators } from '@angular/forms';
import { isLabeledStatement } from 'typescript';
import { EditDialogLabelComponent } from '../edit-dialog-label/edit-dialog-label.component';
import { UpdateServicesService } from 'src/app/service/update-services.service';
import { ArchiveComponent } from '../archive/archive.component';
import { ChildActivationEnd } from '@angular/router';
import { NotepinComponent } from '../notepin/notepin.component';
import { CollabratorComponent } from '../collabrator/collabrator.component';


@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {


  deleteData: { "isDeleted": boolean; "noteIdList": any[]; };
  archivevalue=false;
  archiveData: { "isArchived": boolean; "noteIdList": any[]; };
  cardArray:any;
  pin= false;
  isActive = false;
  id:any;
  rem:any;
  date=new FormControl()
  dateNow : Date = new Date();
  data1:any;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  label:any;
  notedata:any;
  message:string="row wrap";
 
  labelIddata:any;
  reminderValue:any;
  labelArray:any;
  labelName=new FormControl('',[Validators.required])
  @Input() data:any;
  @Input() searchValue:any;
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
data2:any;
datap:any;
idNote:any;
alldata:any
@Input() Search:any;

   archived:boolean=false
  trashed:boolean=false
  //carddata=this.data;
  constructor(
   private httpService:HttpService,
   private snackbar:MatSnackBar,
   public dialog: MatDialog,
   private updateService:UpdateServicesService
  ) {


    this.updateService.changemessage(false,false);
    this.updateService.currentNotes.subscribe(response=>{
      console.log(response);
      this.data=response;
    })
   }
// pined=new Array<Note>();
// others=new Array<Note>();
// fullNotes(){
//   this.data.filter(note=>note.pin===true&&note.archive===false&& note.trash===false).map(note=>this.pined.push(note));
// }


  ngOnInit() {
  // this.getNote();
  this.updateService.currentMessage.subscribe(message=> {
    this.message=message
    console.log(this.message)
  })
  this.updateService.currentNotes.subscribe(response=>{
    this.data=response['body'];
    console.log(this.data);
  })
   this.getLabel();
   this.getNote();

   
   
   
  }


  changeColor(color) {

    this.color = color;
    console.log(this.color);
    }


    getID(card)
    {
     console.log(card.noteId);
     this.idNote=card.noteId;
     console.log(card.reminder)
    }


    getid(note){
      console.log(note);
      console.log(note.labelId);
      console.log(note.reminder);
      this.labelIddata=note.labelId
      
    }



    updateNote(color)
    {
      console.log(this.idNote)
      console.log("color",color)
      this.data2 ={
        
        "color":color
      }
        this.httpService.putRequest1('/user/note/update/color/'+this.idNote,this.data2)
      
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
        
       }

    reminder:any

    setReminder(note)
    {
      
      console.log("curremt time",this.dateNow)
       this.reminderValue= this.dateNow.toISOString();
      
       console.log(this.reminderValue);
      //   this.reminderValue=JSON.stringify(this.date.value);
         console.log("Reminder Value",this.reminderValue)
        
         console.log(this.reminder)
         console.log(note.title)
         
         this.httpService.postReminder('/user/notes/'+note.noteId+'?time='+this.reminderValue).subscribe(
           response=>{
             this.updateService.updateMessage();
             console.log(response);
           }
         )
         //console.log(note.reminder);

    }



    removeReminder(note)
    {
      
      console.log("curremt time",this.dateNow)
       this.reminderValue= this.dateNow.toISOString();
      
       console.log(this.reminderValue);
      //   this.reminderValue=JSON.stringify(this.date.value);
         console.log("Reminder Value",this.reminderValue)
        
         console.log(this.reminder)
         console.log(note.title)
         
         this.httpService.postReminder('/user/notes/remove/'+note.noteId+'?time='+this.reminderValue).subscribe(
           response=>{
             this.updateService.updateMessage();
             console.log(response);
           }
         )
         //console.log(note.reminder);

    }

    laterToday(note){
      const newdate = new Date();
      newdate.setHours(8);
      newdate.setMinutes(0);
      newdate.setSeconds(0);
      console.log(newdate);
      this.reminderValue = {
      "reminder": [newdate],
      // "noteIdList": [this.card.noteId]
      
      }

      console.log("current date",newdate)
      console.log("current1 date",newdate)
     note.reminder=newdate;


      this.httpService.postReminder('/user/notes/'+note.noteId+'?time='+newdate.toISOString()).subscribe(
        response=>{
          this.updateService.updateMessage();
          console.log(response);
        },
  
      
    
      (error) => { console.log("error", error); }
      
      )
      }



      laterTomorrow(note){
        const newdate = new Date();
        newdate.setHours(8);
        newdate.setMinutes(0);
        newdate.setSeconds(0);
        console.log(newdate);
        this.reminderValue = {
        "reminder": [newdate],
        // "noteIdList": [this.card.noteId]
        
        }
  
        console.log("current date",newdate)
        console.log("current1 date",newdate)
       note.reminder=newdate;
  
  
        this.httpService.postReminder('/user/notes/'+note.noteId+'?time='+newdate.toLocaleDateString()).subscribe(
          response=>{
            this.updateService.updateMessage();
            console.log(response);
          },
    
        
      
        (error) => { console.log("error", error); }
        
        )
        }


  




    getNote()
  {
     this.httpService.getNotes(this.archived,this.trashed)
         .subscribe(
          (response) => {console.log("success get notes",response)
          this.data = response['body']; 
            console.log("data-->",this.data);
      this.alldata=this.data.filter(item => item.reminder);
           console.log("heeee..",this.alldata)
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
        this.updateService.updateMessage();
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

//this.updateService.updateMessage()
  );

  
}




removeLabel(label,note)
{
  console.log(label.labelId)
  console.log(note.noteId)
  this.httpService.delete('/user/label/remove?labelId='+label.labelId+'&noteId='+note.noteId)
  .subscribe(response =>{
    this.updateService.updateMessage();
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
 }  ,
 //this.updateService.updateMessage()
  )
  
}


     openDialog(data): void {
      const dialogRef = this.dialog.open( EditDialogComponent, {
        width: '700px',
        height:'200px',
        data: {
        id: data.id,
        title: data.title,
        description:data.description,
        color:data.color,
        noteId:data.noteId,
        reminder:data.reminder,
        label:data.label,
        collabuser:data.collabuser
       

        
          

    }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      
      });
    }


    collabratorDialog(data) {
      const dialogRef = this.dialog.open(CollabratorComponent, {
        width: '750px',
        height:'390px',
     
        data: {
          noteId:data.noteId,
                
      }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

  
  

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



    addLabel1()
    {
      this.label={
    
        "labelName":this.labelName.value,
      }
      console.log(this.label)
     this.httpService.postRequest1('/user/note/addLabel',this.label)
     .subscribe(response=>{
       console.log(response)
       if(response.body.statusCode == 401){
        this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
          duration: 1000,
    });
       }
     })
    }
    

  onEvent(event) {
    event.stopPropagation();
 }



}



