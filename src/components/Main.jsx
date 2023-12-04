import React from "react"
export default function Main(props){
    return(
        <div className="contacts">
        <div className="contact-card">
            <img src="./src/components/profile.jpg" width="100px"/>
            <h3>{props.name}</h3>
            <div className="info-group">
            <p>{props.contact}</p>
            <p>{props.email}</p>
            </div>
        </div>  
</div>
    
    )
}