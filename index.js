import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import configureStore from './src/store/configureStore';
import App from './src/containers/App';
import { FIREBASE_CONFIG } from './src/constants/config';
// import { PersistGate } from 'redux-persist/integration/react';

firebase.initializeApp(FIREBASE_CONFIG);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
const { store } = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('baitap2', () => Root);
