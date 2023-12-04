import React from "react"
import './App.css'
import data from "./data"
import Joke from "./components/Joke"
import Boxes from './components/Boxes'
import Meme from './components/Meme'
function App() {
  //const x=data.map(item=>{
   // return <Joke
   //   setup={item.setup}
   //   punchline={item.punchline}
      
  
  return (
    <>
   <Meme /> 
    </>
  )}
  /*
  const cd=cdata.map(item=>{
    return <Card
    title={item.title}
    description={item.description}
    price={item.price}
    location={item.location}
    image={item.image}
     />
  })
  //we can also use {...item} in order to get all the data in one go and change props.item in joke file.
 */

  //if(isGoingOut===true)?answer="yes":answer="no"
  /*
  const[x,setX]=React.useState(true)
  function y(){
    setX(prevState=>!prevState)
  }
  */

  /*
 const [x,setX]=React.useState()
 function toggle(id){
  setX(prev=>{
    return prev.map((item)=>{
      return item.id===id?{...item,on:!item.on} : item})})}
 

  return(
  <>
  <Boxes
  id={item.id}
  on={item.on}
  toggle={toggle}
   />
  </>
 )
 }
 */

export default App