import React from 'react';
import { Switch } from 'react-router-dom';
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
          : (
            <Public exact path="/login">
              <Login />
            </Public>
          )
      }
    </Switch>
  );
}

export default App;
