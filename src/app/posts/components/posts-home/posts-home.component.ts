import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { changePostsCount, changePostsName, customAdd, customSubtract, decrementPostsCount, resetPostsCount } from '../../state/posts.actions';

@Component({
  selector: 'app-posts-home',
  templateUrl: './posts-home.component.html',
  styleUrls: ['./posts-home.component.css'],
})
export class PostsHomeComponent {
  name: string = 'test';
  count: number = 0;
  postsCustomAdd: number = 0;
  postsCustomSubtract: number = 0;
  add: number = 0;
  subtract: number = 0;
  constructor(private store: Store<AppState>) {
    this.store.select('posts').subscribe((data) => {
      this.name = data.postsName;
      this.count= data.postsCount;
      this.postsCustomAdd = data.postsCustomAdd;
      this.postsCustomSubtract = data.postsCustomSubtract;
    });
  }

  updateName() {
    this.store.dispatch(changePostsName());
  }

  incrementCount(){
    this.store.dispatch(changePostsCount())
  }

  resetCount(){
    this.store.dispatch(resetPostsCount())
  }

  decrementCount(){
    this.store.dispatch(decrementPostsCount())
  }

  customAdd(){
    this.store.dispatch(customAdd({postsCustomAdd:this.add}))
    this.add = 0
  }

  customSubtract(){
    console.log('hello');
    
    this.store.dispatch(customSubtract({postsCustomSubtract:this.subtract}))
    this.subtract = 0
  }
}
