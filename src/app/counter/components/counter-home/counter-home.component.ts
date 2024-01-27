import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { addCounter, changeCounterName, deleteCounter } from '../../state/counter.actions';
import { Counter } from '../../state/counter.state';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-counter-home',
  templateUrl: './counter-home.component.html',
  styleUrls: ['./counter-home.component.css'],
})
export class CounterHomeComponent implements OnInit  {
  name: string = 'test';
  counterData: Counter[] = [];
  userForm: FormGroup;
  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]]
    });
    this.store.select('counter').subscribe((data) => {
      this.name = data.counterName;
      this.counterData = data.counterData;
      // this.userForm =  data.counterData
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.userForm.valid) {
      // Process the form data (e.g., send it to a server)
      console.log('Form submitted:', this.userForm.value);
      this.store.dispatch(addCounter({counterData:this.userForm.value}))
      this.userForm.reset()
    } else {
      // Mark form controls as touched to display validation messages
      this.userForm.markAllAsTouched();
    }
  }

  updateName() {
    this.store.dispatch(changeCounterName());
  }

  delete(id: number){
    this.store.dispatch(deleteCounter({counterId: id}))
  }
}
