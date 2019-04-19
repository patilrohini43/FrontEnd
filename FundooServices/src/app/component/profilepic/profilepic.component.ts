import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { MatDialogRef } from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UpdateServicesService } from 'src/app/service/update-services.service';

@Component({
  selector: 'app-profilepic',
  templateUrl: './profilepic.component.html',
  styleUrls: ['./profilepic.component.scss']
})
export class ProfilepicComponent implements OnInit {

data:any;
  imageChangedEvent: any = '';
  croppedImage;
  constructor(private httpService:HttpService,
    private updateService:UpdateServicesService,
    public dialogRef: MatDialogRef<ProfilepicComponent>) { }

  ngOnInit() {
    this.updateService.currentNotes.subscribe(response=>{
      this.data=response['body'];
      console.log(this.data);
    })

  }
  
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event:any) {
  console.log(event);
  this.croppedImage = event;
  }
   
  setProfile()
  {
    if(this.croppedImage!=null)
    {
      this.dialogRef.close(this.croppedImage);
    }
  }

  
}