import React, {Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/pages/About'
import User from './components/users/User'
import Profile from './components/pages/Profile'

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'


const App = () => {

  return (
    <Fragment>
      <GithubState>
        <AlertState>
          <Router>
            <div className="App">
              <Navbar />
              <div className="container">
                <Alert />
                <Switch>
                  <Route exact path='/' render={props => (
                    <Fragment>
                      <Search />
                      <Users />

                    </Fragment>
                  )} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/user/:login' component={User} />
                  )} />
                  <Route exact path='/profile' component={Profile} />
                </Switch>
              </div>
            </div> 
          </Router>
        </AlertState>
      </GithubState>

    </Fragment>

  );  
}

export default App;
