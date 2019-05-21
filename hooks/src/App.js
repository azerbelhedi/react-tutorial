import React , { useState , useEffect } from 'react'

export default function App(props){
    const [name , setName] = useState("azer")
    const [surName , setSurName] = useState("benelhedi")

    useEffect(() => {
        document.title = name + ' ' + surName 
    })

    const [width , setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {setWidth(window.innerWidth)}
        window.addEventListener('resize' , handleResize)

        return(
            window.removeEventListener('resize' , handleResize)
        )
    })

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

            <hr/>

            <h1>Width</h1>
            {width}

        </div>
    )
}