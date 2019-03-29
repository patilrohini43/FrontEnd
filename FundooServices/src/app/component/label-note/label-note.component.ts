import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';
import { UpdateServicesService } from 'src/app/service/update-services.service';
import { Observable } from 'rxjs';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { map } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';


@Component({
  selector: 'app-label-note',
  templateUrl: './label-note.component.html',
  styleUrls: ['./label-note.component.scss']
})
export class LabelNoteComponent implements OnInit {
labelId:any;
labelArray:any;

data1:any;
label:any;
labelIddata:any;
labelArray1:any;
label1:any;





private cardUuid: string;
  constructor(
    private httpService:HttpService,
    private snacbar:MatSnackBar,
    private router:ActivatedRoute,
    public dialog: MatDialog,
    private cardUpdate:UpdateServicesService,
   
 private snackbar:MatSnackBar,

 private updateService:UpdateServicesService

  ) { 
  
  
  }

  ngOnInit() {
   this.getLabelNote();

  }


  getLabelNote(){
    this.router.params
    .subscribe(response =>{
     this.label1=response.labelId;
      // console.log(response);
       console.log("labelID",this.label1)
       this.cardUpdate.labelNotes(this.label1)
  
      // this.httpService.getLabel1(this.label1)
      //  .subscribe(response =>{
      //  this.labelArray=response['body'];
      //    console.log(response);
      // })

   this.cardUpdate.currentNotes.subscribe(notes=>{
     this.labelArray=notes['body']
     console.log(this.labelArray);
   })

   })
  }




















 
 


// changeColor(color) {

//   this.color = color;
//   console.log(this.color);
//   }


//   getID(card)
//   {
//    console.log(card.noteId);
//   }


//   getid(note){
//     console.log(note);
//     console.log(note.labelId);
//     this.labelIddata=note.labelId
    
//   }




//   getNote()
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


//    delete(card)
//    {
//      console.log(card.noteId)
//      this.httpService.delete('/user/note/'+card.noteId)
//      .subscribe(response =>{

//       if(response.body.statuscode===401)
//       {
//         this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
//           duration: 1000,
//    });
//   // this.updateService.updateMessage();
 
//       }
//       else{
//         this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
//           duration: 1000,
//    });
//       }
//      },
//      (error) => {
//        console.log("error",error);
//     }  
//      )
     
//    }
  



//    removeLabel(label,note)
//    {
//      console.log(label.labelId)
//      console.log(note.noteId)
//      this.httpService.delete('/user/label/remove?labelId='+label.labelId+'&noteId='+note.noteId)
//      .subscribe(response =>{

//       if(response.body.statuscode===401)
//       {
//         this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
//           duration: 1000,
//    });
//   // this.updateService.updateMessage();
 
//       }
//       else{
//         this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
//           duration: 1000,
//    });
//       }
//      },
//      (error) => {
//        console.log("error",error);
//     }  
//      )
     
//    }
  





//    isPin(card)
//    {

//      this.pin=!this.pin
//      console.log(card.noteId)
//      this.httpService.putRequest1('/user/note/isPin/'+card.noteId+'?pin='+this.pin,this.card)
//      .subscribe(response =>{

//       if(response.body.statuscode===401)
//       {
//         this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
//           duration: 1000,
//    });
//       }
//       else{
//         this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
//           duration: 1000,
//    });
//       }
//      },
//      (error) => {
//        console.log("error",error);
//     }  
//      )
     
//    }



// archiveNote(card)
// {
// card.archive=true;
// card.trash=false;
// console.log("archive work start")
// console.log(card.noteId)
// console.log("hii")
// this.httpService.putRequest1('/user/noted/'+card.noteId,this.card)
// .subscribe(response =>{

//  if(response.body.statuscode===401)
//  {
//    this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
//      duration: 1000,
// });



//  }
//  else{
//    this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
//      duration: 1000,
// });
//  }
// },
// (error) => {
//   console.log("error",error);
// }  ,

// this.updateService.updateMessage()
// );


// }



// trashNote(card)
// {
// console.log(card.noteId)
// this.httpService.putRequest1('/user/note/isTrash/'+card.noteId,this.card)
// .subscribe(response =>{

//  if(response.body.statuscode===401)
//  {
//    this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
//      duration: 1000,

     
// });

//  }
//  else{
//    this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
//      duration: 1000,
// });
//  }
// },
// (error) => {
//   console.log("error",error);
// }  ,
// //this.updateService.updateMessage()
// )

// }


//    openDialog(data): void {
//     const dialogRef = this.dialog.open( EditDialogComponent, {
//       width: '700px',
//       height:'200px',
//       data: {
//       id: data.id,
//       title: data.title,
//       description:data.description,
//       color:data.color,
//       noteId:data.noteId,

//   }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
    
//     });
//   }







//   addLabel(note1)
//   {

// // this.httpService.postRequest2('/user/note/addLabelToNote?labelId=240&noteId=156')
// console.log(note1);
// console.log(note1.labelId);
// console.log(note1.noteId)
// this.httpService.postRequest2('/user/note/addLabelToNote?labelId='+this.labelIddata+'&noteId='+note1.noteId,this.card)
//    .subscribe(response=>{
//      console.log(response)
//      this.getNote();
//                 if(response.body.statusCode === 401){

//                 this.snackbar.open(response.body.statusMessage +' !!', 'End now', {
//                   duration: 1000,
//            });
//            this.getNote();
        
//                }
//              else 
  
//                {
//                   console.log(response.body.statusMessage)
//                  this.snackbar.open(response.body.statusMessage +'Invalid !!', 'End now', {
//                    duration: 1000,
//             });
//                }
              
              
//            },
//              error => {
//            //    
//            console.log(error);
          
              
//              });
             
//   }



//   getLabel()
//   {
  
//    this.httpService.getLabel('/user/label/list')
//    .subscribe(response=>{
//      console.log(response);
//      this.labelArray=response['body'];
//      console.log(this.labelArray);
    
//                },
              
//              error => {
        
//            console.log(error);
          
             
//              });
             
//   }


// //     addLabel(card)
// // {


// //   this.label={

// //     "labelName":this.labelName.value,
// //   }
// //   console.log(this.label)
// //  this.httpService.postRequest1('/user/note/createLabel/'+card.noteId,this.label)
// //  .subscribe(response=>{
// //    console.log(response)

 
 
// //  })
// // }


// onEvent(event) {
//   event.stopPropagation();
// }
}