import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { changePostsName } from '../../state/posts.actions';

@Component({
  selector: 'app-posts-home',
  templateUrl: './posts-home.component.html',
  styleUrls: ['./posts-home.component.css'],
})
export class PostsHomeComponent {
  name: string = 'test';
  constructor(private store: Store<AppState>) {
    this.store.select('posts').subscribe((data) => {
      this.name = data.postsName;
    });
  }

  updateName() {
    this.store.dispatch(changePostsName());
  }
}
