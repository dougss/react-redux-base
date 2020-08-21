// libraries/frameworks
import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./root/root.reduces";

const reducers = combineReducers({
  root: rootReducer,
});

// persist redux in local-storage after close site
const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(persistedReducer, composeWithDevTools());

  let persistor = persistStore(store as any);
  return { store, persistor };
};

export type RootState = ReturnType<typeof reducers>;
