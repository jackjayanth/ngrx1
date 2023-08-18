import { createReducer, on } from '@ngrx/store';
import { initialState } from './posts.state';
import { changePostsName } from './posts.actions';

const _postsReducer = createReducer(
  initialState,
  on(changePostsName, (state) => {
    return { ...state, postsName: state.postsName + ' updated' };
  })
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
