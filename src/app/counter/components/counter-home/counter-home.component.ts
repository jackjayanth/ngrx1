import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { changeCounterName } from '../../state/counter.actions';

@Component({
  selector: 'app-counter-home',
  templateUrl: './counter-home.component.html',
  styleUrls: ['./counter-home.component.css'],
})
export class CounterHomeComponent {
  name: string = 'test';
  constructor(private store: Store<AppState>) {
    this.store.select('counter').subscribe((data) => {
      this.name = data.counterName;
    });
  }

  updateName() {
    this.store.dispatch(changeCounterName());
  }
}
