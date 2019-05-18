import React , { Component } from 'react'

class Auth extends Component{
    matchUser(data){
        if(data.username === "azer" && data.pass === "1234"){
            return true
        }
        return false 
    }

    render(){
        return(
            <div>
                {
                    this.matchUser(this.props.data) ? 
                    this.props.children :
                    <h4>can't connect</h4>
                    }
            </div>
        )
    }
}

export default Auth 