import React from "react"
export default function Box(){
    const [x,setX]=React.useState() 
    const y=x.map(item=>(
        <div className="box" key={item.id}></div>
    ))
    return(
        <>
        </>
    )
}