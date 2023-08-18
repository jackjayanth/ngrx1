import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeName } from 'src/app/state/app.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  name: string = '';
  constructor(private store: Store<any>) {
    this.store.select('app').subscribe((data) => {
      this.name = data.name;
    });
  }

  updateName() {
    this.store.dispatch(changeName());
  }
}
