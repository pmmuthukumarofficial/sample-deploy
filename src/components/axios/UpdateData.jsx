import { useState } from "react";
import axios from 'axios'

export default function UpdateData()
{

    const [student, setStudent] = useState({})

    function handleChange(e){
        setStudent({...student, [e.target.name]:e.target.value})
    }

    function formSubmit(e){
        e.preventDefault();
        // console.log(student);

        axios.put('http://localhost:8081/api/student', student)
        .then((res) =>{
            // console.log(res.data);
            if(res.data.rollno !== null){
                alert('udpated successfully')                
            }
            else
                alert('student doesnt exists')
        } )
    }



    return (<>

            <form method="post" onSubmit={formSubmit}>
                <input type="text" name="rollno" placeholder="Rollno" onChange={handleChange}/> <br />
                <input type="text" name="name" placeholder="Name" onChange={handleChange}/><br />
                <select name="gender" onChange={handleChange} >
                    <option disabled selected>Select gender</option>
                    <option value="male" >Male</option>
                    <option value="female">Female</option>
                </select><br />
                <input type="number" name="std" placeholder="Class" onChange={handleChange} /><br />
                <input type="text" name="section" placeholder="Section" onChange={handleChange}/><br />
                <input type="submit" value="Update student" />
            </form>          
        
        
    </>)
}