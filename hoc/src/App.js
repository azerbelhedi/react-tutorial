import React , { Component } from 'react'

import Auth from './hoc/auth'

class App extends Component{
  render(){
    return(
      <div>
        <Auth data = {{username : "azer" , pass : "1234"}}> { /* change props to change auth result  */}
          <h1>
            this is the user data 
          </h1>
          <h6>connected</h6>
        </Auth>
      </div>
    )
  }
}

export default App ;