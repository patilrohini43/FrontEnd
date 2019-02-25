import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router  , ActivatedRoute } from '@angular/router'
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  token:string;
  usergroup:FormGroup;

  constructor(
    private userService:UserService,
    private route: ActivatedRoute,
    private snackbar:MatSnackBar,
    private httpService:HttpService,
    private router:Router
  ) {}
 
  ngOnInit() {
  }
  emailVerify()
  {
    this.token=this.route.snapshot.params['token'];
    console.log(this.token);
  // this.userService.verifyEmail(this.token)
 this.httpService.getRequest('/verify/'+this.token)
    .subscribe(response=> {


      console.log(response.body);
      if(response.body.statusCode===103)
      {
       this.snackbar.open(response.body.statusMessage +" Success",'End Now',
    {
      duration: 1000,
    })
    this.router.navigateByUrl("/resetPassword/"+this.token);
  }else{

    this.snackbar.open(response.body.statusMessage +"Not Verify",'End Now',
    {
      duration: 1000,
    })

  }
 
  error => {
    this.snackbar.open('Reset Password Failed!!', 'End now', {
      duration: 1000,
});
  }
  });
  }



 

}
