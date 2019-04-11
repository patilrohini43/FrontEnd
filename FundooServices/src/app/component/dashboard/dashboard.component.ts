import { Component, OnInit } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { Router } from '@angular/router';
import { EditDialogLabelComponent } from '../edit-dialog-label/edit-dialog-label.component';
import { MatDialog } from '@angular/material';
import { HttpService } from 'src/app/service/http.service';
import { ProfilepicComponent } from '../profilepic/profilepic.component';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { UpdateServicesService } from 'src/app/service/update-services.service';
import {ChangeDetectorRef,  OnDestroy} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
labelArray:any;
icon:any="view_stream";
profilePic:any;
userInfo:any[];
mobileQuery: MediaQueryList;

fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

   fillerContent = Array.from({length: 5},);

  private _mobileQueryListener: () => void;
  constructor(
    private router:Router,
    public dialog: MatDialog,
    private httpService:HttpService,
    private view:UpdateServicesService,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) 
  {this.mobileQuery = media.matchMedia('(max-width: 1000px)');
  this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  this.mobileQuery.addListener(this._mobileQueryListener); }


  ngOnInit() {
    this.getLabel();
    this.getImage();
    this.getUserInfo()
  
  }

  logOut(){
    localStorage.removeItem("token")
    this.router.navigate(['/login']);
  }


  changeView()
  {
    if(this.icon ==='view_stream')
    {
      this.icon='dashboard';
      this.view.changedata('column wrap')

    }else{
      this.icon='view_stream';
      this.view.changedata('row wrap')
    }
  }

  getImage(){
    this.profilePic=localStorage.getItem("token");
    console.log(this.profilePic);
  }

  
  openDialog(): void {
    const dialogRef = this.dialog.open(EditDialogLabelComponent, {
      width: '500px',
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

  getUserInfo(){
    this.httpService.getRequest1('/users').subscribe(response=>{
      console.log(response);
      this.userInfo=response['body'];
      console.log("User Details=>",this.userInfo)

    })
  }



}









// mobileQuery: MediaQueryList;

//   fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

//   fillerContent = Array.from({length: 5},);

//   private _mobileQueryListener: () => void;

//   constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
//     this.mobileQuery = media.matchMedia('(max-width: 600px)');
//     this._mobileQueryListener = () => changeDetectorRef.detectChanges();
//     this.mobileQuery.addListener(this._mobileQueryListener);
//   }

//   ngOnDestroy(): void {
//     this.mobileQuery.removeListener(this._mobileQueryListener);
//   }
