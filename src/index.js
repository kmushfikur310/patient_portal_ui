import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

toastr.options.closeButton = true;
toastr.options.progressBar = true;
toastr.options.timeOut = 5000;  // Notification auto-dismiss time in milliseconds
toastr.options.positionClass = 'toast-top-right';

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);