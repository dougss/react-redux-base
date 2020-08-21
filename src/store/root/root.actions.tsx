import { User, INITIAL, UPDATE, RootActionTypes } from "./root.types";

// TypeScript infers that this function is returning SendMessageAction
export function sendMessage(user: User): RootActionTypes {
  return {
    type: INITIAL,
    payload: user,
  };
}

// TypeScript infers that this function is returning DeleteMessageAction
export function deleteMessage(timestamp: number): RootActionTypes {
  return {
    type: UPDATE,
    meta: {
      timestamp,
    },
  };
}
