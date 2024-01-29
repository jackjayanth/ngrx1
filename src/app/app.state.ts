import { counterReducer } from './counter/state/counter.reducer';
import { CounterState } from './counter/state/counter.state';
import { materialReducer } from './material/state/material.reducer';
import { MaterialState } from './material/state/material.state';
import { postsReducer } from './posts/state/posts.reducer';
import { PostsState } from './posts/state/posts.state';
import { homeReducer } from './state/home.reducer';
import { HomeState } from './state/home.state';

export interface AppState {
  home: HomeState;
  counter: CounterState;
  posts: PostsState;
  material: MaterialState;
}

export const appReducer = {
  home: homeReducer,
  counter: counterReducer,
  posts: postsReducer,
  material: materialReducer,
};
