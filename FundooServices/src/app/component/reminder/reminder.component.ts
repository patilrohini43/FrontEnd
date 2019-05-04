
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
    // this.updateService.currentNotes.subscribe(response=>{
    //   console.log(response);
    //   this.data=response;
    // })
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
  
  })


   this.getNote();
 
   
   
   
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
  


    


}



