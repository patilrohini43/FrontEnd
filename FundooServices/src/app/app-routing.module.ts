import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './component/register/register.component';
import { Register1Component } from './component/register1/register1.component';



const routes: Routes = [
  {
     path: 'register', 
     component:RegisterComponent
  },
  {
    path: 'login', 
    component:LoginComponent
 },
 {
  path: 'register1', 
  component:Register1Component
}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
  
})
export class AppRoutingModule { }
