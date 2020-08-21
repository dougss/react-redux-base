import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./config/settings.i18n";
import { Provider } from "react-redux";
import Routes from "./config/routes";
import storeConfig from "./store/store.config";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = storeConfig();

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </I18nextProvider>
  );
}

export default App;
