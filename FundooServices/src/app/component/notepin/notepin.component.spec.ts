import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepinComponent } from './notepin.component';

describe('NotepinComponent', () => {
  let component: NotepinComponent;
  let fixture: ComponentFixture<NotepinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotepinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotepinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
