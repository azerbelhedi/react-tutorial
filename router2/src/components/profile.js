import React , { Component } from 'react'
import { Link } from 'react-router-dom'

class Profile extends Component{
    render(){
        console.log(this.props)
        return(
            <h1>
                Profile
                <Link to = {`${this.props.match.url}/post`} >take me to profile/posts</Link>
            </h1>
        )
    }
}

export default Profile 