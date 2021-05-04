import React from 'react';
import './App.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore, configurePersistor } from './redux/store';

const store = configureStore();
const persistor = configurePersistor(store)

const App = () => {
  return<Provider store={store}>
  <BrowserRouter>
    <PersistGate persistor={persistor}>
      <Routes />
    </PersistGate>
  </BrowserRouter>
</Provider>
}

export default App;