import React from "react"
export default function Add(){
    const [x,setX]=React.useState(["Item 1"])
    function y(){
        setX(prev=>{
            return [...prev, `Item ${prev.length+1}`]
        })
    }
    const thingsArray=x.map(item=><p>{item}</p>)
    return(
        <>
            <button onClick={y}>Add Item</button>
            {thingsArray}
        </>
    )
    }