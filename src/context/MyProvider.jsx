import React,{useEffect, useReducer, useState} from 'react'
import MyContext from './MyContext'
import {reducerLink} from "../reducers/reducerLink"



const MyProvider = (props) => {


    const newLink = ""
    const [link , dispatchLink] = useReducer( reducerLink, newLink )
    const [image , setImage] = useState("http://placekitten.com/500/500")
    

    

    console.log(image)

    
    useEffect(() => {
        const getData = async ()=> {
            try {
                const response = await fetch(link)
                const data = await response.json()
                console.log(data);
                 
                setImage(data.url === undefined ? data.message : data.url)  
                
            } catch (error) {
               console.log(error); 
            }


        }
        getData()

    },[link])

    

    /* This produces the copyright symbol {String.fromCharCode(169)} */




    return (
        <MyContext.Provider value={{link, dispatchLink, image}} >
            {props.children}
        </MyContext.Provider>
    )
}

export default MyProvider
