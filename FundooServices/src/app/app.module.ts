import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router"; 
import { AppRoutingModule }     from './app-routing.module';
import { from } from 'rxjs';
import { UserService } from './service/user.service';
import { AlertmessageService } from './service/alertmessage.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { MaterialModule } from './material';
import { ReactiveFormsModule }    from '@angular/forms';
import {MatCardModule} from '@angular/material/card'; 

import { Register1Component } from './component/register1/register1.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotpasswordComponent } from 'src/app/component/forgotpassword/forgotpassword.component';
import { RestPasswordComponent } from './component/rest-password/rest-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { LoginVerifyComponent } from './login-verify/login-verify.component';
import { DemoComponent } from './demo/demo.component';
import { HttpService } from './service/http.service';
import { AddNoteComponent } from './component/add-note/add-note.component';
import { NoteComponent } from './component/note/note.component';
import { EditDialogComponent } from './component/edit-dialog/edit-dialog.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { UpdateServicesService } from './service/update-services.service';
import { TrashComponent } from './component/trash/trash.component';







@NgModule({
  declarations: [
    AppComponent,

   
  Register1Component,
  LoginComponent,
  DashboardComponent,
  ForgotpasswordComponent,
  RestPasswordComponent,
  VerifyEmailComponent,
  LoginVerifyComponent,
  DemoComponent,
  AddNoteComponent,
  NoteComponent,
  EditDialogComponent,
  ArchiveComponent,
  TrashComponent,

 

   

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule
   

    
  ], 
  providers: [UserService,AlertmessageService,HttpService,UpdateServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
