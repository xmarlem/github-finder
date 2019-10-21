import React, {Fragment, useState} from 'react';
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
import PlayState from './context/play/playContext'


const App = () => {
  const [alert, setAlert] = useState(null);

  // set alert
  const showAlert = (msg, type) => {
    setAlert({msg: msg, type: type})
    setTimeout(()=> setAlert(null), 2000)
  }

  return (
    <Fragment>
      <GithubState>
          <Router>
            <div className="App">
              <Navbar />
              <div className="container">
                <Alert alert={alert} />
                <Switch>
                  <Route exact path='/' render={props => (
                    <Fragment>
                      <Search 
                        setAlert={showAlert}
                      />
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
      </GithubState>

    </Fragment>

  );  
}

export default App;
