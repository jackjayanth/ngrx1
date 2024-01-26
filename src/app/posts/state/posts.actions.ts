import { createAction, props } from '@ngrx/store';

export const changePostsName = createAction('changePostsName');
export const changePostsCount = createAction('changePostsCount');
export const resetPostsCount = createAction('resetPostsCount');
export const decrementPostsCount = createAction('decrementPostsCount');
export const customAdd = createAction('customAdd', props<{ postsCustomAdd: number }>());
export const customSubtract = createAction('customSubtract', props<{ postsCustomSubtract: number }>());
