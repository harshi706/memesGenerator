import React from "react"
export default function Boxes(props){
    const styles={
        backgroundColor:props.on?"black":"white"
    }
    return(
    <>
        <div style={styles} className="boxes" onClick={()=>props.toggle(props.id)}></div>

    </>
)
}