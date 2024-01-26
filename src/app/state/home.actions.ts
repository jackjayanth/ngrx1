import { createAction, props } from '@ngrx/store';
import { Todo } from './home.state';

export const changeName = createAction('changeName');
export const addTodo = createAction('addTodo', props<{ todoTask: string }>());
export const deleteTodo = createAction('deleteTodo', props<{ id: number }>());
export const changeStatusOfTodo = createAction(
  'changeStatusOfTodo',
  props<{ todo: Todo }>()
);
