import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <App />
        <ToastContainer />
      </AppProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
