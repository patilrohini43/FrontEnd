import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, FormGroup, Validators, EmailValidator,FormControl } from '@angular/forms';
import { AlertmessageService } from 'src/app/service/alertmessage.service';
import { User } from 'src/app/model/user';
import { first } from 'rxjs/operators';

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
    private alertService:AlertmessageService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
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
  
   this.userService.loginUser(this.loginForm.value)
       .pipe(first())
       .subscribe(
           data => {
               this.router.navigate(['/dashboard']);
               alert("login data successfully");
           },
           error => {
               this.alertService.error(error);
               this.loading = false;
           });
}

  }
  
  




