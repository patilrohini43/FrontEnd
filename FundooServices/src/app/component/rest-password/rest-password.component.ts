import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route:ActivatedRoute,
    private router:Router

  ) { }

    ngOnInit() {
    this.resetForm = this.formBuilder.group({
      password:[],
      confirmpassword:[],
    });
    this.route.params.subscribe(param => {
      this.token = param.token});
  }

  password=new FormControl('',[Validators.required]);
  confirmpassword =new FormControl('',[Validators.required]);
  
 
  pwdMatchValidator(frm: FormGroup) {
    return frm.get('password').value === frm.get('confirmedPassword').value
       ? null : {'mismatch': true};
 } 

  onResetPassword()
  {
    console.log(this.resetForm.value);
    this.userService.resetPassWord(this.token,this.resetForm.value.password,this.resetForm.value.confirmpassword)
    
    .subscribe(data => {
     
      // if(data.password !== data.confirmpassword)
      // {
      //   this.confirmpassword.setErrors({mismatch:true});
      // }
      // else{
      //   this.confirmpassword.setErrors(null);
      // }
      this.snackbar.open("Reset password SuccessFully" ," end now!!!!" ,
      {
        duration:1000,
      });

      this.router.navigate(['/login']);

    })
  }


}



