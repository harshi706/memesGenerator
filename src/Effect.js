import React from "react"
export default function Effect(){
    const[data,setData]=React.useState(0)
    console.log("Comp rendered")
    function handle(){
       setData(prev=>prev+1)
    }
    React.useEffect(function(){
        console.log("Effect func ran")
    },[data])
    return(
        <>
        <button onClick={handle}>Count</button>
        </>
    )
}