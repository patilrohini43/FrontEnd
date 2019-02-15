import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';




import { RegisterComponent } from './component/register/register.component';
import { Register1Component } from './component/register1/register1.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotpasswordComponent } from 'src/app/component/forgotpassword/forgotpassword.component';



const routes: Routes = [
  {
     path: 'register', 
     component:RegisterComponent
  },

 {
  path: 'register1', 
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
}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
  
})
export class AppRoutingModule { }
