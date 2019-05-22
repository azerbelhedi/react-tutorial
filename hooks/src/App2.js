import React , { useState , useEffect } from 'react'

export default function App2(props){
    const name = useInput("wael")
    const surName = useInput("fatil")

    const width = useWindowWidth()
    useDocumentTitle(name.value + ' ' + surName.value)

    return(
        <div style = {{width : "40%" , background : "yellow" , margin : "10px"}}>
            <h5>name</h5>
            <input
                {...name}
            />

            <hr/>

            <h5>surName</h5>
            <input
                {...surName}
            />

            <hr/>

            <h5>Width</h5>
            {width}

        </div>
    )
}

function useWindowWidth() {
    const [width , setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {setWidth(window.innerWidth)}
        window.addEventListener('resize' , handleResize)

        // return(
        //     window.removeEventListener('resize' , handleResize)
        // )
    })

    return width 
}

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title
    })
}

function useInput(initialValue) {
    const [value , setValue] = useState(initialValue)

    function handleValueChange(e){
        setValue(e.target.value)
    }

    return {
        value ,
        onChange : handleValueChange
    } ;
}