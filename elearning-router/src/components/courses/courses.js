import React , { Component } from 'react'
import { Link , Route } from 'react-router-dom'

const course = (props) => {
    return(
        <div>
            <h1>
                {props.match.params.name}
            </h1>
            <h5>
                id : {props.match.params.slide ? props.match.params.slide : 0}
            </h5>
        </div>
    )
}

class Courses extends Component{
    render(){
        return(
            <div>
              <h1>
                this is  courses :
              </h1>

              <header>
                <Link to = {`${this.props.match.url}/react101/0`}>React 101</Link>
                <br/>
                <Link to = {`${this.props.match.url}/introduction-to-html/0`} >Introduction to HTML</Link>
                <br/>
                <Link to = {`${this.props.match.url}/javascript50/0`} >JavaScript 50 </Link>
              </header>
              <div className = "course-content">
                    <Route path = {`${this.props.match.url}/:name/:slide`} component = {course}/>
              </div>
            </div>
        )
    }
}

export default Courses

    
  