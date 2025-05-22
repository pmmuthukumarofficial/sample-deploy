import { useEffect } from "react"
import { useState } from "react"



export default function UseEffectExample() // ViewRecords
{

    const [names, setNames] = useState([])
    const [newName, setNewName] = useState('')

   
    useEffect(()=>{
        console.log(names);
    },[names])
    
    function handleChange(e){
        setNewName(e.target.value)        
    }

    function addName(){        
        setNames([...names, newName]);       
    }

    return <>
        {names}

        <input type="text" placeholder="your name" onChange={handleChange}  />
        <button onClick={addName}>Add</button>
    </>
}