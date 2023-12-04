import React from "react"
export default function Form(){
    const [form,setForm]=React.useState({
        first:"", last:"" , mail:"", area:"",
        option:"",fav:""
       // isForm:true create a new state for checkbox
    })
     console.log(form)
    function handlefunc(event){
        setForm(prev=>{
            return{
                ...prev,
                [event.target.name]:event.target.value
            }}
       )
    }

    function handleData(event){
    event.preventDefault()
    console.log(form)
    }
    return(
        <>
            <form onSubmit={handleData}>
                <input type="text" placeholder="Enter your first name"
                 onChange={handlefunc} name="first"
                 value={form.first} //for controlled components               
                />
                 <input type="text" placeholder="Enter your last name"
                 onChange={handlefunc} name="last"
                 value={form.last}
                />
                <input type="email" placeholder="Enter your email" 
                onChange={handlefunc} name="mail"
                 value={form.mail}
                />
                <textarea  
                    onChange={handlefunc}
                    name="area"
                    value={form.area}
                />
                <input type="checkbox"
                checked={form.value}
                name="isForm"
                onChange={handlefunc} />
                <fieldset>
                <legend>Choose any one of them</legend>
                    A:<input type="radio"
                    name="option"
                    value="A"
                    onChange={handlefunc}/>
                      B:<input type="radio"
                    name="option"
                    value="B"
                    onChange={handlefunc}/>
                      C:<input type="radio"
                    name="option"
                    value="C"
                    onChange={handlefunc}/>
                </fieldset>
                Whats your fav food?:<select 
                name="fav"
                value={form.fav}
                onChange={handlefunc}
                >
                <option value="">--Choose--</option>
                <option value="momos">Momos</option>
                <option value="dosa">Dosa</option>
                <option value="pasta">Pasta</option>
                <option value="paneer">Paneer</option>

                </select>
                
                <button>Submit</button>
            </form>
        </>
    )
}