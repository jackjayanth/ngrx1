import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialHomeComponent } from './material-home.component';

describe('MaterialHomeComponent', () => {
  let component: MaterialHomeComponent;
  let fixture: ComponentFixture<MaterialHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialHomeComponent]
    });
    fixture = TestBed.createComponent(MaterialHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
