import React,{useContext} from 'react'
import  "./Main.css"
import MyContext from "../../context/MyContext"
const Main = () => {
    const context = useContext(MyContext)
    const {dispatchLink , image } = context

    
    return (
        <div className="main">
            <h1>This is the main content</h1>
            <div>
                <button onClick={()=> dispatchLink("Dog")} >Dog</button>
                <button onClick={()=> dispatchLink("AnotherDog")}>another dog</button>
                <img src={image} alt="pet" />
            </div>
            
        </div>
    )
}

export default Main
