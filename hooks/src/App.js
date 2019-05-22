import React from 'react'

import App1 from './App1'
import App2 from './App2'

export default function App(props){
    return(
        <div style = {{display : "flex"}}>
            <App1 />
            <App2 />
        </div>
    )
}