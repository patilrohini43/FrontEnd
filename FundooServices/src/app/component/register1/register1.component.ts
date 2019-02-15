import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, FormGroup, Validators, EmailValidator,FormControl } from '@angular/forms';
import { AlertmessageService } from 'src/app/service/alertmessage.service';
import { first } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.scss']
})
export class Register1Component implements OnInit {



  registerForm: FormGroup;
  loading = false;
  submitted = false;
  user: User = new User();
  constructor(
    private router:Router,
    private userService:UserService, 
    private formBuilder: FormBuilder,
    private alertService:AlertmessageService,
    private snakbar:MatSnackBar
  ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      username: [this.user.username],
      password: [this.user.password],
      email: [this.user.email],
      mobilenumber: [this.user.mobilenumber],
  });
  }

     // convenience getter for easy access to form fields
     get f() { return this.registerForm.controls; }

    username = new FormControl('', [Validators.required]);
    password = new FormControl('', [Validators.required,Validators.minLength(6)]);
    email=new FormControl('', [Validators.required]);
    mobilenumber=new FormControl('', [Validators.required]);
    


  onRegister()
  {
         this.submitted = true;

         // stop here if form is invalid
       if (this.registerForm.invalid) {
            return;
        }

        console.log(this.registerForm.value);
        this.loading = true;
        this.userService.registerUser1(this.registerForm.value)
          //pipe(first())
             .subscribe(
            data => {
              this.snakbar.open('Registration successful!!', 'End now', {
                duration: 1000,
          });
          
                    this.router.navigate(['/login']);
               },
                error => {
                  this.snakbar.open('Not registered!!', 'End now', {
                    duration: 1000,
              });
              }); 
     }
   

   
  

}
