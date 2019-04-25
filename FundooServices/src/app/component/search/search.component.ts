import { Component, OnInit } from '@angular/core';
import { PipeServiceService } from '../pipe-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

 public loading = true;
  Search:any
  constructor(

    private pipe:PipeServiceService
  ) { }

  ngOnInit() {

    this.pipe.currentMessage.subscribe(message=>{
      this.Search=message;
      console.log(this.Search)
    })
    }




}
