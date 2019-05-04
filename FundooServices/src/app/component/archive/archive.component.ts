import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar, MatDialog } from '@angular/material';

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
import { CollabratorComponent } from '../collabrator/collabrator.component';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(
    private httpService:HttpService,
    private snackbar:MatSnackBar,
    private updateService:UpdateServicesService,
    public dialog: MatDialog,

  ) {

    console.log("click on archive message")
   this.updateService.changemessage(true,false);
  }
   private allnotes:any[];
   private alldata:any[];
  
@Input() allnotes1=new Array<Note>();
alldata1=new  Array<Note>();

// pined=new Array<Note>();
// others=new Array<Note>();
// fullNotes(){
//   this.data.filter(note=>note.pin===true&&note.archive===false&& note.trash===false).map(note=>this.pined.push(note));
// }

  ngOnInit() {


  this.updateService.currentNotes.subscribe(
    response=>{

      this.allnotes1=response['body'];
      console.log("getting notes",this.allnotes1) 

     console.log(this.alldata1)
    
    },
  )

   }


  























   

}
