import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { UpdateServicesService } from 'src/app/service/update-services.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  private allnotes:any[];
  constructor(
    private httpService:HttpService,
    private updateService:UpdateServicesService

  ) {
    this.updateService.changemessage(false,true);
   }

  ngOnInit() {
 this.updateService.currentnotes2.subscribe(
  response=>{
    this.allnotes=response['body']
  }

)

// this.httpService.getNotes(false,true).subscribe(
//   response=>{
//     this.allnotes=response.body
//   }

//  )

}


}
