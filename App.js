import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import AppStack from './src/navigation/navigations';
import { store, persistor } from './src/storage/config/ReduxStore';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();

const App = () => (
  <React.Fragment>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppStack />
      </PersistGate>
    </Provider>
  </React.Fragment>
);

export default App;