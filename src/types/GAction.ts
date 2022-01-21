export type GAction<T, U = undefined> = {
  type: T;
  payload: U;
};
