import React , { Component } from 'react'
import { Link , Route } from 'react-router-dom'

const Post1 = (props) => {
    console.log(props)
    return(
        <div>
            <h5>this is a post 1 ....</h5>
            <h6>
                name : {props.match.params.name}
            </h6>
            <h6>
                id : {props.match.params.id}
            </h6>
        </div>
    )
}


const Post2 = () => {
    return(
        <div>
            <h5>this is a post 2....</h5>
        </div>
    )
}

const Post3 = () => {
    return(
        <div>
            <h5>this is a post 3 ....</h5>
        </div>
    )
}
class Post extends Component{
    render(){
        return(
            <h1>
                <Link to = {`${this.props.match.url}/post1`}> post1 </Link>
                <Link to = {`${this.props.match.url}/post2`}> post2 </Link>
                <Link to = {`${this.props.match.url}/post3`}> post3 </Link>

                <Route path = {`${this.props.match.url}/post1/:id/:name`} component={Post1}/>
                <Route path = {`${this.props.match.url}/post2`} component={Post2}/>
                <Route path = {`${this.props.match.url}/post3`} component={Post3}/>

            </h1>
        )
    }
}

export default Post 