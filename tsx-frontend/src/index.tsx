import React from 'react';
import ReactDOM from 'react-dom/client';
import init from 'rust-tsx';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

init().then(() => root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
));
