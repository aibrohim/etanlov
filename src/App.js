import React from 'react';
import { Redirect, Switch, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import useToken from './hooks/useToken';
import Private from './routes/Private';
import Public from './routes/Public';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Users from './screens/Users/Users';

import "./assets/scss/main.scss";

function App() {
  const [token] = useToken();

  const { pathname } = useLocation();

  return (
    <Switch>
      {
        token ?
          (
            <Layout>
              <Private exact path="/">
                <Home />
              </Private>
              <Private exact path="/users">
                <Users />
              </Private>
            </Layout>
          )
          : pathname === "/login"
            ? (
              <Public exact path="/login">
                <Login />
              </Public>
            )
            : (
              <Redirect to='/login' />
            )
      }
    </Switch>
  );
}

export default App;
