import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleWorkComponent } from './sample-work.component';

describe('SampleWorkComponent', () => {
  let component: SampleWorkComponent;
  let fixture: ComponentFixture<SampleWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleWorkComponent]
    });
    fixture = TestBed.createComponent(SampleWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
