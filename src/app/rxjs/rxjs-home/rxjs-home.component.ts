import { getName } from './../rxjs-state/rxjs.selector';
import { RxjsServiceService } from '../rxjs-services/rxjs-service.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import {
  decrementCounter,
  doubleCounter,
  incrementCounter,
  reduceCounter,
  resetCounter,
  nameUpdate,
  postPerson,
} from '../rxjs-state/rxjs.actions';
import { getCounter, getPersons } from '../rxjs-state/rxjs.selector';
import { Person } from '../rxjs.models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rxjs-home',
  templateUrl: './rxjs-home.component.html',
  styleUrls: ['./rxjs-home.component.css'],
})
export class RxjsHomeComponent implements OnInit {
  counter: number = 0;
  name1: string = '';
  persons: Person[] = [];
  userForm: FormGroup;

  constructor(
    private dataService: RxjsServiceService,
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z\s]+$/),
        ],
      ],
      age: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    });

    //this is the old way of not using a selector
    // this.store.select('rxjs').subscribe((data) => {
    //   console.log(data);
    // });

    //selector code and getting data from selector
    this.store.select(getCounter).subscribe((data) => {
      this.counter = data;
      console.log('selector counter', data);
    });
    this.store.select(getName).subscribe((data) => {
      this.name1 = data;
      console.log('selector name', data);
    });
    this.store.select(getPersons).subscribe((data) => {
      this.persons = data;
      console.log('selector persons', data);
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.store.dispatch(
        postPerson({
          person: this.userForm.value,
        })
      );
      console.log(this.userForm.value);
      alert('Form submitted successfully!');
      // Reset form after submission
      this.userForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  // Getter methods for easier access to form controls in the template
  get name() {
    return this.userForm.get('name');
  }

  get age() {
    return this.userForm.get('age');
  }

  ngOnInit(): void {}

  // incrmeent counter
  increment() {
    this.store.dispatch(incrementCounter());
  }

  // decrement counter
  decrement() {
    this.store.dispatch(decrementCounter());
  }

  // doubleCounter
  doubleCounter() {
    this.store.dispatch(doubleCounter());
  }

  // reduceCounter
  reduceCounter() {
    this.store.dispatch(reduceCounter());
  }

  // resetCounter
  resetCounter() {
    this.store.dispatch(resetCounter());
  }

  // updateName
  updateName() {
    this.store.dispatch(nameUpdate());
  }

  // GET Data
  fetchData() {
    this.dataService.getRXJSData().subscribe(
      (response) => {
        console.log('Data fetched successfully:', response);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  // POST Data
  addData() {
    const newData = { name: 'John Doe', age: 30 };
    this.dataService.postData(newData).subscribe(
      (response) => {
        console.log('Data added successfully:', response);
      },
      (error) => {
        console.error('Error adding data:', error);
      }
    );
  }

  // PUT Data
  updateData() {
    const updatedData = { name: 'Jane Doee', age: 235 };
    this.dataService.putData(updatedData).subscribe(
      (response) => {
        console.log('Data updated successfully:', response);
      },
      (error) => {
        console.error('Error updating data:', error);
      }
    );
  }

  // DELETE Data
  removeData() {
    this.dataService.deleteData().subscribe(
      (response) => {
        console.log('Data deleted successfully:', response);
      },
      (error) => {
        console.error('Error deleting data:', error);
      }
    );
  }
}
