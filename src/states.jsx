import React from "react"
export default function States(){
const [count,setCount]=React.useState(0)
function prac(){
    setCount(count+1)
}
function practice(){
    setCount(count-1)
}
return(
<div className='counter'>
  <button className='counter--minus' onClick={practice}>-</button>
  <div className='counter--count'>
    <h1>{count}</h1>
  </div>
  <button className='counter--plus' onClick={prac}>+</button>
 </div>
)}