import { useEffect } from "react";
import { useState } from "react"
import Post from "../styling-conditional-rendering/Post";


export default function UseStateExample()
{      
    const [username, setUsername] = useState(""); //   string 
    const [count, setCount] = useState(0) // number
    const [students, setStudents] = useState([]) // arr
    const [user, setUser] = useState({})

    useEffect(()=>{      
        // setCount(100)

        // get Data after login success
        const user = {
            username:'riya_kannan',
            fullName:'Riya',
            city:'chennai'
        }
        setUser(user)
        // setUsername("muthu")
    },[])
    
    return <>        
    
        <h2>User details</h2>        
        <h4>Username : {user.username}</h4>
        <h4>Fullname : {user.fullName}</h4>
        
        <p>count : {count}</p>
        <button onClick={()=> setCount( count=>count+1 )}>Increment</button>

    </>
}