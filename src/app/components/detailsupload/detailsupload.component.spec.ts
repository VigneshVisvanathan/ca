import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsuploadComponent } from './detailsupload.component';

describe('DetailsuploadComponent', () => {
  let component: DetailsuploadComponent;
  let fixture: ComponentFixture<DetailsuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
