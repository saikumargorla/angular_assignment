import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagepagingComponent } from './imagepaging.component';

describe('ImagepagingComponent', () => {
  let component: ImagepagingComponent;
  let fixture: ComponentFixture<ImagepagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagepagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagepagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
