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
} from '../rxjs-state/rxjs.actions';
import { getCounter, getName } from '../rxjs-state/rxjs.selector';

@Component({
  selector: 'app-rxjs-home',
  templateUrl: './rxjs-home.component.html',
  styleUrls: ['./rxjs-home.component.css'],
})
export class RxjsHomeComponent implements OnInit {
  counter: number = 0;
  name: string = '';

  constructor(
    private dataService: RxjsServiceService,
    private store: Store<AppState>
  ) {
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
      this.name = data;
      console.log('selector name', data);
    });
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
