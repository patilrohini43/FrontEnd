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
import { DemoComponent } from './demo/demo.component';
import { AddNoteComponent } from './component/add-note/add-note.component';
import { NoteComponent } from './component/note/note.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { AllnotesComponent } from './component/allnotes/allnotes.component';
import { TrashComponent } from './component/trash/trash.component';
import { AuthguardGuard } from './service/authguard.guard';
import { PinComponent } from './component/pin/pin.component';




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
  canActivate : [AuthguardGuard],
  path: 'dashboard', 
  component:DashboardComponent,

  children:[

    {
    
      path: '', 
      component:AddNoteComponent,
    },
    {
    
      path: 'addnote', 
      component:AddNoteComponent,
    },
    {
      path: 'notes', 
      component:NoteComponent,
    },
    {
    
      path: 'archive', 
      component:ArchiveComponent,
    },
    {
      path: 'notes1', 
      component:AllnotesComponent,
    },
    {
      path: 'trash', 
      component:TrashComponent,
    },
    {
      path: 'pin', 
      component:PinComponent,
    },




  ]
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
{
  path: 'demo',
  component:DemoComponent
},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
  
})
export class AppRoutingModule { }
