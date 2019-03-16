import { Component, OnInit,Inject, SystemJsNgModuleLoader } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { HttpService } from 'src/app/service/http.service';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-dialog-label',
  templateUrl: './edit-dialog-label.component.html',
  styleUrls: ['./edit-dialog-label.component.scss']
})
export class EditDialogLabelComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditDialogLabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpService:HttpService,
    private snackbar:MatSnackBar
  ) { }

  labelArray:any;
  label:any;
  labelName=new FormControl('',[Validators.required])

  ngOnInit() {
    this.getLabel();
    console.log(this.getLabel());
  }


  
  onNoClick(): void {
    this.dialogRef.close();
  }


  getLabelId(labels)
  {
    console.log(labels);
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

getLabelValue()
{
 
}


  addLabel()
{
  this.label={

    "labelName":this.labelName.value,
  }
  console.log(this.label)
 this.httpService.postRequest1('/user/note/addLabel',this.label)
 .subscribe(response=>{
   console.log(response)
   if(response.body.statusCode == 401){
    this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
      duration: 1000,
});
   }
 })
}

updateLabel(labels)
     {
      this.label={

        "labelName":this.labelName.value,
      }
      
       console.log(labels.labelId)
       console.log(labels.labelName)
       this.httpService.putRequest1('/user/note/editLabel/'+labels.labelId,this.label)
       .subscribe(response =>{
         console.log("response of update ",response);

        if(response.body.statuscode===401)
        {
          this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
            duration: 1000,
     });
        }
        else{
          this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
            duration: 1000,
     });
        }
       },
       (error) => {
         console.log("error",error);
      }  
       )
       
     }




deleteLabel(labels)
{
 
  console.log(labels.labelId)
  console.log(labels.labelName)
  this.httpService.delete('/user/label/'+labels.labelId)
  .subscribe(response =>{
    console.log("response of update ",response);

   if(response.body.statuscode===401)
   {
     this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
       duration: 1000,
});
   }
   else{
     this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
       duration: 1000,
});
   }
  },
  (error) => {
    console.log("error",error);
 }  
  )
  
}

}
