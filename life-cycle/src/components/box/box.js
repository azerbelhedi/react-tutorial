import React , { Component } from 'react'

class Box extends Component{
    // 1 get default props
    
    // 2 set default state

    // 3 before JSX render 
    componentWillMount(){
        console.log("before render : { componentWillMount } ")
    }

    // 4 render JSX
    render(){
        console.log("render JSX")
        return(
            <div>
                <h1>
                    this is the life cycle !
                </h1>
            </div>
        )
    }

    // 5 after JSX render
    componentDidMount(){
        console.log("after render : {componentDidMount} ")
    }

}

export default Box 