import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkUxComponent } from './work-ux.component';


describe('WorkUxComponent', () => {
  let component: WorkUxComponent;
  let fixture: ComponentFixture<WorkUxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkUxComponent]
    });
    fixture = TestBed.createComponent(WorkUxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
