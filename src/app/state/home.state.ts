export interface HomeState {
  name: string;
  todos: Todo[];
}

export interface Todo {
  todoId: number;
  todoTask: string;
  todoStatus: boolean;
}

export const initialState = {
  name: 'Jay',
  todos: [
    { todoId: 1, todoTask: 'Eat a cake', todoStatus: true },
    { todoId: 2, todoTask: 'Drink a lot of water', todoStatus: false },
  ],
};
