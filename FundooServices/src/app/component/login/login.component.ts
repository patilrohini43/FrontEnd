import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, FormGroup, Validators, EmailValidator,FormControl } from '@angular/forms';
import { AlertmessageService } from 'src/app/service/alertmessage.service';
import { User } from 'src/app/model/user';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/service/http.service';
import { tokenKey } from '@angular/core/src/view';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
   user:User;
  constructor(
    private router:Router,
    private userService:UserService, 
    private formBuilder: FormBuilder,
    private httpService:HttpService,
    private alertService:AlertmessageService,
    private snackbar:MatSnackBar
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
     email: [],
      password: [],
  
  });

  }
  email=new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required,Validators.minLength(6)]);

   onLogin()
 {
    console.log(this.loginForm.value);
    this.submitted = true;
    // stop here if form is invalid
 if (this.loginForm.invalid) {
       return;
   }

   this.loading = true;
  
   // this.userService.loginUser(this.loginForm.value)
    this.httpService.putRequest('/Login',this.loginForm.value)
        .subscribe(
            response  => {
        
              console.log(response.body);
              console.log(response.body.statusMessage);
              console.log(response.body.token);
            
               if(response.body.statusCode == 200){
               this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
                 duration: 1000,
          });
                 this.router.navigate(['/dashboard']);
                 
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
         
                this.loading = false;
            });
            
 }

  }
  
  




