import React, { Component } from 'react';
import './App.css';
import Neutron from './components/neutron' ;
import { BrowserRouter as Router , Route , Link , Switch } from 'react-router-dom' ; 

const NavBar = () =>{
  return(
    <div>
      <ul>
        <li>
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to = "/profile">Profile</Link>
        </li>
        <li>
          <Link to = "/login">Login</Link>
        </li>
      </ul>
    </div>
  )
}

const Home = () => {
  return(
    <h1>Home</h1>
  )
}

const Profile = () =>{
  return(
    <h1>Profile</h1>
  )
}

const Login = () =>{
  return(
    <h1>Login</h1>
  )
}

const Error = () =>{
  return(
    <h1>404 page not found</h1>
  )
}

class App extends Component {
  render() {
    return(
      <Router>
        <div>
        <NavBar/>
        <Switch>
          <Route  exact path = "/" component = {Home}/>
          <Route path = "/profile" component = {Profile} />
          <Route path = "/login" component = {Login} />
          <Route component = {Error} />
        </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
