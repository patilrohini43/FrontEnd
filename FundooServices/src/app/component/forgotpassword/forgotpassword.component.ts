import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, FormGroup, Validators, EmailValidator,FormControl } from '@angular/forms';
import { AlertmessageService } from 'src/app/service/alertmessage.service';
import { MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/service/http.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  forgotForm: FormGroup;
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
  ) {}

  ngOnInit() {

    this.forgotForm = this.formBuilder.group({
     email: []
   
  });

  
  }

  email=new FormControl('', [Validators.required]);


  onForgot()
  {
    console.log(this.forgotForm.value.email);
   // this.userService.forgotPassword(this.forgotForm.value.email)
    this.httpService.getRequest('/forgot?email='+this.forgotForm.value.email)
    .subscribe(data=>  this.forgotForm.value)
    this.snackbar.open('Email Send SuccessFully For reset!!', 'End now', {
      duration: 1000,
});
          this.router.navigate(['/login']);

          error => {
            this.snackbar.open('Email Not Send!!', 'End now', {
              duration: 1000,
        });
     }

    }
 
 

    
  

}
