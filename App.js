import * as React from 'react';
import store from './src/store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {StatusBar} from 'react-native';
import MainRoute from './src/routes/MainRoute';

function App() {
  const persistor = persistStore(store);
  return (
    <>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        showHideTransition={'fade'}
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainRoute />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
