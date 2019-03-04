import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Note } from 'src/app/model/note';
import { Notedto } from 'src/app/model/createnote';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
 // note:Note=new Note();
 note:Notedto=new Notedto();
  noteForm: FormGroup;
  isActive = false;
  flag=false;
  constructor(

    private router:Router,
    private httpService:HttpService,
    private snackbar:MatSnackBar,
    private formBuilder: FormBuilder


  ) { }

  ngOnInit() {
  }

  show() {
  
    this.flag = ! this.flag;
  }


createNote()
  {
  
    // this.userService.loginUser(this.loginForm.value)
     this.httpService.postRequest1('/user/note',this.note)
         .subscribe(
             response  => {
         
               console.log(response.body);
               console.log(response.body.statusMessage);
              // console.log(response.body.token);
             
                if(response.body.statusCode == 401){
                this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
                  duration: 1000,
           });
                //  this.router.navigate(['/dashboard']);
                  
                 localStorage.setItem("token",response.body.token);
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
}
