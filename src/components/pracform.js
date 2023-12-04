import React from "react"
export default function Form(){
    const[data,setData]=React.useState({
        mail:"",
        pass:"",
        cpass:""
    })
    console.log(data)
    function handleData(event){
        setData(prev=>{
            return{
            ...prev,
            [event.target.name]: event.target.value
         }     
        })
    }
    /*const[tick,setTick]=React.useState({
        tick:true,
    })
    */
    
    function handleSub(event){
        event.preventDefault()
        if(data.pass===data.cpass){
            console.log("Sucessfully signed up");
        }
        else{
            console.log("Passwords dont match")
        }

        
    }
    return( 
        <>
            <form onSubmit={handleSub}>
            <input type="email"
            placeholder="Enter your email id"
            name="mail"
            value={data.mail}
            onChange={handleData} />
            <input type="password"
            placeholder="Enter the password"
            name="pass"
            value={data.pass}
            onChange={handleData} />
            <input type="password"
            placeholder="Confirm password"
            name="cpass"
            value={data.cpass}
            onChange={handleData} />
            I want yo join the newsletter:<input type="checkbox"
            checked={tick}
            name="tick"
            onChange={handleTick} />

            <button>Submit</button>
            </form>
        </>
    )
}