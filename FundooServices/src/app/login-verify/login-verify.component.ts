import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router  , ActivatedRoute } from '@angular/router'
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login-verify',
  templateUrl: './login-verify.component.html',
  styleUrls: ['./login-verify.component.scss']
})
export class LoginVerifyComponent implements OnInit {

  token:string;
  usergroup:FormGroup;

  constructor(
    private userService:UserService,
    private route: ActivatedRoute,
    private snackbar:MatSnackBar,
    private router:Router
  ) {}
 

  ngOnInit() {
  }

  loginVerify()
  {
    this.token=this.route.snapshot.params['token'];
    console.log(this.token);
    this.userService.verifyEmail(this.token)
    .subscribe(data=> {
       this.snackbar.open("Email Verify SuccessFully",'End Now',
    {
      duration: 1000,
    })
    this.router.navigateByUrl("/login");
    });
  }


}
