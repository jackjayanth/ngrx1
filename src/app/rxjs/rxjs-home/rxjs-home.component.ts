import {
  postPersonWithoutId,
  updatePerson,
} from './../rxjs-state/rxjs.actions';
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
  myName: string = '';
  persons: Person[] = [];
  userForm: FormGroup;
  showSubmit: boolean = true;
  personIdEdit: any;

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
      this.myName = data;
      console.log('selector name', data);
    });
    this.store.select(getPersons).subscribe((data) => {
      this.persons = data;
      console.log('selector persons', data);
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      let formData = this.userForm.value;
      this.dataService.postData(this.userForm.value).subscribe(
        (response) => {
          console.log('Data updated successfully:', response);
          let personData = formData;
          personData.id = response.name;
          console.log(personData);
          this.store.dispatch(
            postPersonWithoutId({
              person: personData,
            })
          );
        },
        (error) => {
          console.error('Error updating data:', error);
        }
      );
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

  edit(person: Person) {
    this.userForm.setValue({ name: person.name, age: person.age });
    this.showSubmit = false;
    this.personIdEdit = person.id;
  }

  onEdit() {
    if (this.userForm.valid) {
      let formData = this.userForm.value;
      formData.id = this.personIdEdit;
      this.dataService.putData(this.userForm.value).subscribe(
        (response) => {
          console.log('Data updated successfully:', response);
          this.store.dispatch(
            updatePerson({
              person: formData,
            })
          );
        },
        (error) => {
          console.error('Error updating data:', error);
        }
      );
      alert('Form submitted successfully!');
      // Reset form after submission
      this.userForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  delete() {}

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
