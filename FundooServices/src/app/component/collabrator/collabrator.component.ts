import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/service/http.service';
import { FormControl, Validators } from '@angular/forms';
import { Notedto } from 'src/app/model/createnote';

@Component({
  selector: 'app-collabrator',
  templateUrl: './collabrator.component.html',
  styleUrls: ['./collabrator.component.scss']
})
export class CollabratorComponent implements OnInit {
profilePic:any;

archived:boolean=false
trashed:boolean=false
userDetails:any;
note:any;
data1:any;
email:any;
collab:any;
useremail=new FormControl('',[Validators.required])

  constructor(
    public dialogRef: MatDialogRef<CollabratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Notedto,
    private httpService:HttpService,
    private snackbar:MatSnackBar,
  ) { }

  ngOnInit() {
    this.getImage();
    this.getUserDetails();
    this.getUser();
 
  }

  getImage(){
    this.profilePic=localStorage.getItem("token");
    console.log(this.profilePic);
  }

  // getNote()
  // {
  //    this.httpService.getNotes(this.archived,this.trashed)
  //        .subscribe(
  //         (response) => {console.log("success get notes",response)
  //         this.data = response['body']; 
  //           console.log("data-->",this.data);
      
           
  //     if(response.body.statuscode===401){
  //       this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
  //         duration: 1000,
  //  });
   

  //     }
  //         },
  //           (error) => {console.log("error",error);}  
           
              
  //            );
             
  //    }


     getUserDetails()
     {
       this.httpService.getUserInfo('/users').subscribe(response=>{
         console.log(response);
         this.userDetails=response['body'];

       })
     }

   getUser()
   {
     this.httpService.getUserInfo('/user/note/list/collab?email='+this.useremail.value+'&noteId='+this.data.noteId).subscribe(response=>{
       console.log(response);
       this.data1=response['body'];
       console.log("user Info",this.data)
       if(response.body.statuscode===401){
        this.snackbar.open(response.statusMessage +' !!', 'End now', {
          duration: 500,
   });
  }
  else{
    this.snackbar.open(response.statusMessage +' !!', 'End now', {
      duration: 500,
});

  }
  (error) => {console.log("error",error);}  
      
     })
   }

   addCollbrator1(id){
this.data.noteId;
console.log(this.data.noteId)
   }


   addCollbrator(data){ 
  
     console.log(this.data1)
     this.httpService.postRequest1('/user/collabrator/addCollab1?email='+this.email.value+'&noteId='+this.data.noteId,this.collab)
     .subscribe(response=>{
       console.log(response);
       console.log(response.body.statuscode)
      if(response.body.statuscode===401){
        this.snackbar.open(response.statusMessage +' !!', 'End now', {
          duration: 500,
   });
   

      }
          },
            (error) => {console.log("error",error);}  
           
              
             );

   }


   removeCollbrator(email:any)
   {
    console.log(this.data1)
    this.httpService.delete('/user/collabrator/removeCollabrator?email='+email+'&noteId='+this.data.noteId)
    .subscribe(response=>{
      console.log(response);
      console.log(response.body.statuscode)
     if(response.body.statuscode===401){
       this.snackbar.open(response.statusMessage +' !!', 'End now', {
         duration: 500,
  });
  

     }
     else{
      this.snackbar.open(response.statusMessage +' !!', 'End now', {
        duration: 500,
 });

     }
         },
           (error) => {console.log("error",error);}  
          
             
            );
   }


   
  
}
