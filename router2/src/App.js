import React , { Component } from 'react'
import { BrowserRouter , Route , Link} from 'react-router-dom'

// component 
import Profile from './components/profile'
import Home from './components/home'
import Post from './components/post'

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <header>
          <Link to = "/"> Home </Link> <br/>
          <Link to = "/profile"> Profile </Link> <br/>
          <Link to = "/post"> Post </Link>
        </header>

        <hr/>
        
        <Route exact path = "/" component = {Home} />
        <Route path = "/profile" component = {Profile} />
        <Route path = "/post" component = {Post} />
      </BrowserRouter>
    )
  }
}

export default App 