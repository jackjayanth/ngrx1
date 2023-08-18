import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { changeName } from 'src/app/state/home.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  name: string = '';
  constructor(private store: Store<AppState>) {
    this.store.select('home').subscribe((data) => {
      this.name = data.name;
    });
  }

  updateName() {
    this.store.dispatch(changeName());
  }
}
