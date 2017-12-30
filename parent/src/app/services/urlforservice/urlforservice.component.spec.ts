import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlforserviceComponent } from './urlforservice.component';

describe('UrlforserviceComponent', () => {
  let component: UrlforserviceComponent;
  let fixture: ComponentFixture<UrlforserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlforserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlforserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
