import React , { Component } from 'react'
import {BrowserRouter , Link , Route, Redirect , Switch } from 'react-router-dom' 

// routes components :
import Login from './components/login/login'
import Home from './components/home/home'
import Courses from './components/courses/courses'


const link = {
  backgroundColor :"gray" ,
  margin :"10px"
}

class App extends Component{
  render(){
    return(
      <div className = "app">
        <BrowserRouter>
          <header style = {{display : "flex"}}>
            <Link to = "/" style = {link} >Home</Link>
            <Link to = "/login" style = {link}>Login</Link>
            <Link to = "courses" style = {link} >Courses</Link>
          </header>
          <div className = "routes" >
            <Switch>
              <Route path = "/login" component = {Login} />
              <Route path = "/courses" component = {Courses} />
              <Route  path = "/" component = {Home}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App 