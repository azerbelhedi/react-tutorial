import React , { useState , useEffect } from 'react'

export default function App1(props){
    const [name , setName] = useState("azer")
    const [surName , setSurName] = useState("benelhedi")

    useEffect(() => {
        document.title = name + ' ' + surName 
    })

    const [width , setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {setWidth(window.innerWidth)}
        window.addEventListener('resize' , handleResize)

        // return(
        //     window.removeEventListener('resize' , handleResize)
        // )
    })

    function handleNameChange(e){
        setName(e.target.value)
    }

    function handleSurNameChange(e){
        setSurName(e.target.value)
    }

    return(
        <div style = {{width : "40%" , background : "red" , margin : "10px"}}>
            <h5>{name}</h5>
            <input
                value = {name}
                onChange = {handleNameChange}
            />

            <hr/>

            <h5>{surName}</h5>
            <input
                value = {surName}
                onChange = {handleSurNameChange}
            />

            <hr/>

            <h5>Width</h5>
            {width}

        </div>
    )
}