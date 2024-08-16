import { Person } from '../rxjs.models';

export interface RXJSState {
  name: string;
  counter: number;
  persons: Person[];
}

export const rxjsInitialState: RXJSState = {
  name: 'Jay',
  counter: 10,
  // persons: [
  //   { id: '-O4DeabOW6bconPf8K2L', age: 12, name: 'Jane Doe' },
  //   { id: '-O4Deadmn4bpUJ45c1T4', age: 30, name: 'John Doe' },
  //   { id: '-O4Deagi0yfJCO6BUjK8', age: 30, name: 'Rooney Mara' },
  //   { id: '-O4Deaj3K0hApIr7RCoN', age: 23, name: 'Spider man' },
  //   { id: '-O4Dealpfh_EqKkHeoud', age: 13, name: 'John snow' },
  // ],
  persons: [
    {
      id: '-O4P1YakKFm18XjhdsDm',
      age: 2,
      name: 'aa',
    },
    {
      id: '-O4P2ONooWsFHGO7yR3n',
      age: 12,
      name: 'asfsafasfsafasf',
    },
  ],
};
