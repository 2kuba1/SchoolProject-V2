import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import NavbarProvider from './Contexts/NavbarContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </BrowserRouter>
);
