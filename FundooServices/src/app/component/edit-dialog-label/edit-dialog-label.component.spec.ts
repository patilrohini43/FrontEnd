import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogLabelComponent } from './edit-dialog-label.component';

describe('EditDialogLabelComponent', () => {
  let component: EditDialogLabelComponent;
  let fixture: ComponentFixture<EditDialogLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDialogLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDialogLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
