import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Register1Component } from './component/register1/register1.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotpasswordComponent } from 'src/app/component/forgotpassword/forgotpassword.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { RestPasswordComponent } from './component/rest-password/rest-password.component';
import { LoginVerifyComponent } from './login-verify/login-verify.component';




const routes: Routes = [
 

 {
  path: 'register', 
  component:Register1Component
},

{
  path: 'login', 
  component:LoginComponent
},
{
  path: 'dashboard', 
  component:DashboardComponent
},
{
  path: 'forgot', 
  component:ForgotpasswordComponent
},
{
  path: 'forgetVerify/:token',
  component:VerifyEmailComponent
},

{
  path: 'loginVerify/:token',
  component:LoginVerifyComponent
},
{
   path: 'resetPassword/:token',
  //path: 'resetPassword',
  component:RestPasswordComponent
},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
  
})
export class AppRoutingModule { }
