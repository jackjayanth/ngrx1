import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkUxComponent1 } from './work-ux1.component';


describe('WorkUxComponent1', () => {
  let component: WorkUxComponent1;
  let fixture: ComponentFixture<WorkUxComponent1>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkUxComponent1]
    });
    fixture = TestBed.createComponent(WorkUxComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
