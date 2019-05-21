import React , { useState } from 'react'

export default function App(props){
    const [name , setName] = useState("azer")
    const [surName , setSurName] = useState("benelhedi")

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleSurNameChange(e){
        setSurName(e.target.value)
    }

    return(
        <div>
            <h1>{name}</h1>
            <input
                value = {name}
                onChange = {handleNameChange}
            />

            <hr/>

            <h1>{surName}</h1>
            <input
                value = {surName}
                onChange = {handleSurNameChange}
            />
        </div>
    )
}