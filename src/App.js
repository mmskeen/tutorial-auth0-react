import React from 'react';
import { Router } from "@reach/router";
import { useAuth } from "react-use-auth";
import Callback from "./components/Callback";
import './App.css';

function App() {
  const s = useAuth();

  const Login = () => {
    if (s.isAuthenticated()) {
      console.log("user is: ", s.user);
      console.log("useAuth is: ", s);
      return <button onClick={s.logout}>Logout</button>;
    } else {
      return <button onClick={s.login}>Login</button>;
    }
  };

  const Greeting = () => {
    if (s.isAuthenticated()) {
      return <h1>Hi, {s.user.name}!</h1>;
    } else {
      return <h1>Hi there! Please login.</h1>
    }
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
