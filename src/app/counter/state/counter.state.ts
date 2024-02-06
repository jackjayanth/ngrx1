export interface CounterState {
  counterName: string;
  counterData: Counter[];
}

export interface Counter {
  id: number;
  name: string;
  age: number;
}

export const initialState = {
  counterName: 'Jay',
  counterData: [
    { id: 1, name: 'Jay', age:32 },
    { id: 2, name: 'Lauru', age:33 },
    { id: 3, name: 'Madhuri', age:18 },
    ],
};
