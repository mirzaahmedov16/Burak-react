import React from 'react';
import { createRoot } from 'react-dom/client'; // 1. Yangi client moduli import qilinadi
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import './css/index.css';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container); // 2. createRoot yaratiladi
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

reportWebVitals();