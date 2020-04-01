import React from 'react';
import ReactDOM from 'react-dom';
import { navigate } from "@reach/router";
import { AuthProvider } from "react-use-auth";
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
  <AuthProvider
    navigate={navigate}
    auth0_domain={process.env.REACT_APP_AUTH0_DOMAIN}
    auth0_client_id={process.env.REACT_APP_AUTH0_CLIENT_ID}>
    <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);