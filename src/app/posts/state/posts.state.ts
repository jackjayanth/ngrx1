export interface PostsState {
  postsName: string;
  postsCount: number;
  postsCustomAdd: number;
  postsCustomSubtract: number;
}

export const initialState = {
  postsName: 'Jay posts',
  postsCount: 0,
  postsCustomAdd: 0,
  postsCustomSubtract: 10,
};
