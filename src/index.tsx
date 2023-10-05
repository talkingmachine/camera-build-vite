import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app';
import { store } from './store';
import { getItemsList } from './store/api-actions';
import { Provider } from 'react-redux';

store.dispatch(getItemsList());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
