import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuploadComponent } from './listupload.component';

describe('ListuploadComponent', () => {
  let component: ListuploadComponent;
  let fixture: ComponentFixture<ListuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
