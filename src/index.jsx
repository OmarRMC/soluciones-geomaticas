import React from 'react';
import ReactDOM from 'react-dom/client';
import './fontawesome';
import './index.css';
import App, { preloadRoute } from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
preloadRoute(window.location.pathname).finally(() => root.render(
  <HelmetProvider>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </HelmetProvider>
));
