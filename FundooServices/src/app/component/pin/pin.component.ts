import { Component, OnInit } from '@angular/core';
import { HttpSentEvent } from '@angular/common/http';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {

  constructor(private httpService:HttpService) { }
  showPinned = false;
  showUnpinned = false;
  allnotes:any[];
  ngOnInit() {

    this.httpService.getNotes(false,false).subscribe(response=>
    {
      console.log(response);
      this.allnotes=response['body'];
      console.log(this.allnotes)
      this.showPinned=false;
      this.showUnpinned=false;
      this.content_filter();

    })

    
  }


  private content_filter() {
    this.allnotes.forEach(x => {
      if (x.pin == true) {
        this.showPinned = true;
      }

      if (x.pin == false) {
        this.showUnpinned = true;
      }
    })
  }            


}
