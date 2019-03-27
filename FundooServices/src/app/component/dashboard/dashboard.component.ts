import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { Router } from '@angular/router';
import { EditDialogLabelComponent } from '../edit-dialog-label/edit-dialog-label.component';
import { MatDialog } from '@angular/material';
import { HttpService } from 'src/app/service/http.service';
import { ProfilepicComponent } from '../profilepic/profilepic.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
labelArray:any;
profilePic:any;
  constructor(
    private router:Router,
    public dialog: MatDialog,
    private httpService:HttpService

  ) { }


  ngOnInit() {
    this.getLabel();
    this.getImage();
  
  }

  logOut(){
    localStorage.removeItem("token")
    this.router.navigate(['/login']);
  }


  getImage(){
    this.profilePic=localStorage.getItem("token");
    console.log(this.profilePic);
  }

  
  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogLabelComponent, {
      width: '400px',
      height:'500px'
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    });
  }


  getLabel()
  {
  
   this.httpService.getLabel('/user/label/list')
   .subscribe(response=>{
     console.log(response);
     this.labelArray=response['body'];
     console.log(this.labelArray);
    
               },
              
             error => {
        
           console.log(error);
          
             
             });
             
  }


  
 ProfileSelect() {
    const dialogRef = this.dialog.open(ProfilepicComponent,
      {
        width: '400px',
        height:'500px'
      });
  
      dialogRef.afterClosed().subscribe(
        (x:any) =>
        {
          if(x!=null)
          { 
            console.log("hjkjhkjh",x.file)
            this.httpService.uploadProfileImage('/user/profileupload',x.file).subscribe(
            value =>
            {
              console.log(value);
            }
          );
          }
})
  }



}
