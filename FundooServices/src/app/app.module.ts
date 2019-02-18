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
import { RegisterComponent } from './component/register/register.component';
import { Register1Component } from './component/register1/register1.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotpasswordComponent } from 'src/app/component/forgotpassword/forgotpassword.component';
import { RestPasswordComponent } from './component/rest-password/rest-password.component';
import { VerifyEmailComponent } from './component/verify-email/verify-email.component';
import { LoginVerifyComponent } from './login-verify/login-verify.component';
import { RestdataComponent } from './restdata/restdata.component';



@NgModule({
  declarations: [
    AppComponent,
  RegisterComponent,
   
  Register1Component,
  LoginComponent,
  DashboardComponent,
  ForgotpasswordComponent,
  RestPasswordComponent,
  VerifyEmailComponent,
  LoginVerifyComponent,
  RestdataComponent,
   

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
  providers: [UserService,AlertmessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
