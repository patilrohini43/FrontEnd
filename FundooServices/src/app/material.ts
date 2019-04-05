import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

import {MatFormFieldModule} from '@angular/material/form-field';


import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  
  MatButtonToggleModule,
  
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

import { from } from 'rxjs';
import { EditDialogComponent } from './component/edit-dialog/edit-dialog.component';
import { EditDialogLabelComponent } from './component/edit-dialog-label/edit-dialog-label.component';
import { ProfilepicComponent } from './component/profilepic/profilepic.component';
import { CollabratorComponent } from './component/collabrator/collabrator.component';


@NgModule({
  imports: [MatButtonModule,MatSidenavModule, MatCheckboxModule,MatCardModule,MatChipsModule,MatFormFieldModule],
  
    exports: [MatButtonModule, MatCheckboxModule,MatCardModule,MatChipsModule,MatFormFieldModule,
      
      MatAutocompleteModule,
      MatBadgeModule,
      MatSidenavModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatStepperModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatTreeModule,
  
      ],
      entryComponents:[
        EditDialogComponent,
        EditDialogLabelComponent,
        ProfilepicComponent,
        CollabratorComponent
      ],
     
 
    
})
export class MaterialModule { }