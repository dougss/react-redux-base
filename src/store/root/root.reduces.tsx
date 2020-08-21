import { UserState, INITIAL, UPDATE, RootActionTypes } from "./root.types";

const initialState: UserState = {
  user: {
    user: "user",
    message: "message",
    timestamp: 51123,
  },
};

export function rootReducer(
  state = initialState,
  action: RootActionTypes
): UserState {
  switch (action.type) {
    case INITIAL:
      return {
        user: { ...state.user, ...action.payload },
      };
    case UPDATE:
    default:
      return state;
  }
}
