import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import { ProSidebarProvider } from 'react-pro-sidebar';
import App from './components/App/App';

ReactDOM.render(
  <Provider store={store}>
    <ProSidebarProvider>
    <App />
    </ProSidebarProvider>
  </Provider>,
  document.getElementById('react-root'),
);
