import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.component.html',
  styleUrls: ['./rest-password.component.scss']
})
export class RestPasswordComponent implements OnInit {

 user:User;
 resetForm:FormGroup;
 token:string;

  constructor(
    private userService:UserService,
    private snackbar:MatSnackBar,
    private formBuilder: FormBuilder,
    private httpService:HttpService,
    private route:ActivatedRoute,
    private router:Router

  ) { }

    ngOnInit() {
    this.resetForm = this.formBuilder.group({
      password:[],
      confirmpassword:['', Validators.required, PasswordValidation.MatchPassword]
      
    });
    
    this.route.params.subscribe(param => {
      this.token = param.token});
  }

  password=new FormControl('',[Validators.required]);
  confirmpassword =new FormControl('',[Validators.required]);
  

  onResetPassword()
  {
    console.log(this.resetForm.value);
   // this.userService.resetPassWord(this.token,this.resetForm.value.password,this.resetForm.value.confirmpassword)
   this.httpService.getRequest('/reset/'+this.token+'/?password='+this.resetForm.value.password)
    .subscribe(response  => {

      console.log(response.body);
      if(response.body.statusCode===102)
      {
    
      
      this.snackbar.open(response.body.statusMessage +"Reset password SuccessFully" ," end now!!!!" ,
      {
        duration:1000,
      });

      this.router.navigate(['/login']);
    }
    else{
      this.snackbar.open(response.body.statusMessage +" Invalid" ," end now!!!!" ,
      {
        duration:1000,
      });

    }

    })
    error => {
      this.snackbar.open('Reset Password Failed!!', 'End now', {
        duration: 1000,
  });
  }

  }
}

export class PasswordValidation {

  static MatchPassword(AC: FormControl) {
     return new Promise( resolve => {
       let password = AC.parent.controls['password'].value; // to get value in input tag
       let confirmpassword = AC.value; // to get value in input tag
       if(password === confirmpassword) {
         return resolve(null); // All ok, passwords match!!!
       } else {
          return resolve({"not_match": true})
       }
    });

  }
}

