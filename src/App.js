import React from 'react';
import { Router } from "@reach/router";
import { useAuth } from "react-use-auth";
import Callback from "./components/Callback";
import './App.css';

function App() {
  const { isAuthenticated, login, logout, user } = useAuth();

  const Login = () => {
      return isAuthenticated() ? 
        <button onClick={logout}>Logout</button> :
        <button onClick={login}>Login</button>;
  };

  const Greeting = () => {
    return isAuthenticated() ?
      <h1>Hi, {user.name}!</h1> :
      <h1>Hi there! Please login.</h1>;
  }

  return (
    <div className="App">
      <h1>Auth0 Example</h1>
      <Greeting />
      <Login />
      <Router>
        <Callback path="/auth0_callback" />
      </Router>
    </div>
  );
}

export default App;
