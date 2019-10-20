import React, {Fragment, useState} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './components/pages/About'
import User from './components/users/User'

import GithubState from './context/github/GithubState'


const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);


  // Get users repos
  const getUserRepos = async username => {
    setLoading(true)
    const res = 
    await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created_asc&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setRepos(res.data)
    setLoading(false)
  }


  // set alert
  const showAlert = (msg, type) => {
    setAlert({msg: msg, type: type})
    setTimeout(()=> setAlert(null), 2000)
  }

  return (
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
              <Route exact path='/user/:login' render={props => (
                <User 
                  {...props} 
                  getUserRepos={getUserRepos} 
                  user={user} 
                  repos={repos}
                  loading={loading}
                />
              )} />
            </Switch>
          </div>
        </div> 
      </Router>
    </GithubState>

  );  
}

export default App;
