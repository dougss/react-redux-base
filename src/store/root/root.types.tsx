export const INITIAL = "INITIAL";
export const UPDATE = "UPDATE";

export interface UserState {
  user: User;
}

export interface User {
  user: string;
  message: string;
  timestamp: number;
}

interface InitialAction {
  type: typeof INITIAL;
  payload: User;
}

interface UpdateAction {
  type: typeof UPDATE;
  meta: {
    timestamp: number;
  };
}

export type RootActionTypes = InitialAction | UpdateAction;
