import React from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import App from './src/containers/App';
// import { PersistGate } from 'redux-persist/integration/react';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const { store } = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('baitap2', () => Root);
