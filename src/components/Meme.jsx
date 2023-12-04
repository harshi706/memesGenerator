import React from "react"
import mdata from "../mdata.js"
export default function Meme(){
    
   
    //const[memeImage,setMemeImage]=React.useState("http://i.imgflip.com/lbij.jpg")
    const[meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    })
    const[allMemeImages,setAllMemeImages]=React.useState([])
    React.useEffect(()=>{  
        fetch("https://api.imgflip.com/get_memes") 
           .then(res=>res.json()
           .then(data=>setAllMemeImages(data.data.memes)))
    },[])
    function gen(){
     //   const x=allMemeImages.data.memes
        const y=Math.floor(Math.random()*allMemeImages.length)
        const url=allMemeImages[y].url
       // console.log(url)
       setMeme(prev=>({
        ...prev,
        randomImage:url
       }))
       }
       function handleMeme(event){
        setMeme(prev=>{
            return{
                ...prev,
                [event.target.name]:event.target.value
            }
        })
       }
       const toggle = () => {
        setMeme(prev => ({
            ...prev,
            topText: "",
            bottomText: ""
        }));
    };
    return(
        <div>
        <header className="head">
        <div className="meme">Meme Generator</div>
        </header>
        <main className="mn">
        <form className="box">
        <input type="text" 
        placeholder="Enter the top line"
        name="topText"
        value={meme.topText}
        onChange={handleMeme}
        id="top" />
        <input type="text"
         placeholder="Enter the bottom line"
        name="bottomText"
        value={meme.bottomText}
        onChange={handleMeme}
         id="bottom" />
        </form> 
        <button className="btns" onClick={gen}>Get a meme image</button>
        <img src={meme.randomImage} className="meimg"/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </main>
        <button className="btns" onClick={toggle}>Toggle</button>
        <button className="btns">Download</button>
        </div>
    )
}