import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from './App/Routes/AppRoutes';

import 'bootstrap/dist/css/bootstrap.min.css';

import './global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)
