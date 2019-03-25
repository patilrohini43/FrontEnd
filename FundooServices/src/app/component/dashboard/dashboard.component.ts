import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { Router } from '@angular/router';
import { EditDialogLabelComponent } from '../edit-dialog-label/edit-dialog-label.component';
import { MatDialog } from '@angular/material';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
labelArray:any;
  constructor(
    private router:Router,
    public dialog: MatDialog,
    private httpService:HttpService

  ) { }


  ngOnInit() {
    this.getLabel();
  }

  logOut(){
    localStorage.removeItem("token")
    this.router.navigate(['/login']);
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

  
}
