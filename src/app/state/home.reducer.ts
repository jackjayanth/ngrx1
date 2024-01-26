import { createReducer, on } from '@ngrx/store';
import { Todo, initialState } from './home.state';
import {
  addTodo,
  changeName,
  changeStatusOfTodo,
  deleteTodo,
} from './home.actions';

const _homeReducer = createReducer(
  initialState,
  on(changeName, (state) => {
    return { ...state, name: state.name + ' updated' };
  }),
  on(addTodo, (state, action) => {
    let todos = {} as Todo;
    todos.todoTask = action.todoTask;
    todos.todoId = state.todos.length + 1;
    todos.todoStatus = false;
    return { ...state, todos: [...state.todos, todos] };
  }),
  on(deleteTodo, (state, action) => {
    let newTodos = state.todos.filter((elem) => elem.todoId !== action.id);
    return { ...state, todos: newTodos };
  }),
  on(changeStatusOfTodo, (state, action) => {
    const updatedPosts = state.todos.map((todo) => {
      return action.todo.todoId === todo.todoId
        ? { ...action.todo, todoStatus: !action.todo.todoStatus }
        : todo;
    });
    console.log(JSON.stringify(updatedPosts));

    return {
      ...state,
      todos: updatedPosts,
    };
  })
);

export function homeReducer(state: any, action: any) {
  return _homeReducer(state, action);
}
