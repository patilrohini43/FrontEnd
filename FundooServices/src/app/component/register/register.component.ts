import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { AlertmessageService } from 'src/app/service/alertmessage.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private router:Router,
    private userService:UserService, 
    private formBuilder: FormBuilder,
    private alertService:AlertmessageService
  ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', Validators.required],
      mobilenumber: ['', Validators.required],
  });
  }

     // convenience getter for easy access to form fields
     get f() { return this.registerForm.controls; }

  onRegister()
  {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.registerUser1(this.registerForm.value)
       // this.userService.registerUser(this.registerForm.value)
          .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
              }); 
    }
    
  }


