import React from "react"
export default function Joke(props){
    const[isShown,setIsShown]=React.useState(false)
    function toggle(){
        setIsShown(prev=>!prev)
    }
    return(
        <>
           <h3>Setup: {props.setup}</h3> 
          {isShown && <h3>puncline: {props.punchline}</h3>}
         {isShown &&<button onClick={toggle}>Hide</button>}
         {!isShown &&<button onClick={toggle}>Show</button>}

          <hr />
        </>
    )
}
//{message.length===0 && <p>you arr alla caught up</p>}
  