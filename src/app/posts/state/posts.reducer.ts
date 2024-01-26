import { createReducer, on } from '@ngrx/store';
import { initialState } from './posts.state';
import { changePostsCount, changePostsName, customAdd, customSubtract, decrementPostsCount, resetPostsCount } from './posts.actions';

const _postsReducer = createReducer(
  initialState,
  on(changePostsName, (state) => {
    return { ...state, postsName: state.postsName + ' updated' };
  }),
  on(changePostsCount, (state) => {
    return { ...state, postsCount: state.postsCount + 1 };
  }),
  on(resetPostsCount, (state) => {
    return { ...state, postsCount: 0};
  }),
  on(decrementPostsCount, (state) => {
    return { ...state, postsCount: state.postsCount- 1};
  }),
  on(customAdd, (state, action) => {
    return { ...state, postsCustomAdd: state.postsCustomAdd+(+action.postsCustomAdd)};
  }),
  on(customSubtract, (state, action) => {
    return { ...state, postsCustomSubtract: state.postsCustomSubtract-(+action.postsCustomSubtract)};
  }),
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
