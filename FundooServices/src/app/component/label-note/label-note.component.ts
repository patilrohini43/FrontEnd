import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';
import { UpdateServicesService } from 'src/app/service/update-services.service';

@Component({
  selector: 'app-label-note',
  templateUrl: './label-note.component.html',
  styleUrls: ['./label-note.component.scss']
})
export class LabelNoteComponent implements OnInit {
labelId:any;
labelArray:any;
  constructor(
    private httpService:HttpService,
    private snacbar:MatSnackBar,
    private router:ActivatedRoute,
    private cardUpdate:UpdateServicesService

  ) { }

  ngOnInit() {
   // this.getLabelNote();
 
   
  }

// label:any;
//   getLabelNote(){
//     this.router.params
//     .subscribe(response =>{
//      response;
//        console.log(response);
//        console.log("labelID",this.labelId)
//        //this.cardUpdate.labelNotes(this.labelId)
//        console.log(this.labelId)
      
//       this.httpService.getLabel1(response)
//        .subscribe(response =>{
//        this.labelArray=response['body'];
//          console.log(response);
//     //   })

//    // this.cardUpdate.currentNotes.subscribe(notes=>{
//    //   this.labelArray=notes['body']
//    //   console.log(this.labelArray);
//     })

//     })
//   }

// this.router.queryParamMap
//   .switchMap((params: Params) =>
//     this.service.fetchCardUuid(params.get('id')))
//   .subscribe(
//     card => {
//       this.card = card;
//       this.getVenueUuid(this.card);
//     });

}
