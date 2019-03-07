import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Note } from 'src/app/model/note';
import { Notedto } from 'src/app/model/createnote';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
 
 note:Notedto=new Notedto();
 title= new FormControl('')
  description=new FormControl('')

  isActive = false;
  flag=false;
  data:any
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

  changeColor(color) {

    this.color = color;
    
    }


createNote()
  {
  
    // this.userService.loginUser(this.loginForm.value)
    this.data={
      "title":this.title.value,
      "description":this.description.value,
      "color":this.color
    }
    console.log(this.data);
     this.httpService.postRequest1('/user/note',this.data)
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
                  
                 //localStorage.setItem("token",response.body.token);
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
