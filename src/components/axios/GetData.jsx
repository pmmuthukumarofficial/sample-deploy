import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'



export default function GetData()
{
    const [studentRecords, setStudentRecords] = useState([])
    const [student, setStudent] = useState({})


    function loadData(){
        axios.get('http://localhost:8081/api/students')
        .then((res)=>{
            // console.log(res.data)
            setStudentRecords(res.data)
        })   
    }

    useEffect(()=>{          
        loadData();
    },[])

    function handleChange(e){
        setStudent({...student, [e.target.name]:e.target.value})
    }

    function formSubmit(e){
        e.preventDefault();
        // console.log(student);

        axios.post('http://localhost:8081/api/student', student)
        .then((res) =>{
            // console.log(res.data);
            if(res.data.rollno !== null){
                alert('added successfully')
                loadData()
            }
            else
                alert('student already exists')
        } )
    }

    function deleteStudent(){
        axios.delete(`http://localhost:8081/api/students/${student.rollno}`)
        .then((res)=>{
            if(res.data.rollno !== null){
                alert('deleted succesfully')
                loadData()
            }
            else
                alert('data doesnt exists')
        })
    }

    // fetch('')
    // .then()
    // .then()

    return (
        <>
            <div className="container d-flex space-evenly" >
            <table border={1} cellPadding={"10px"}>
                <thead>
                    <tr>
                        <th>Rollno</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Class</th>
                        <th>Section</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentRecords.map((stu) => 
                                    <tr key={stu.rollno}>
                                        <td>{stu.rollno}</td>
                                        <td>{stu.name}</td>
                                        <td>{stu.gender}</td>
                                        <td>{stu.std}</td>
                                        <td>{stu.section}</td>
                                    </tr>
                        )
                    }
                </tbody>
            </table>

            <form method="post" onSubmit={formSubmit}>
                <input type="text" name="rollno" placeholder="Rollno" onChange={handleChange}/> <br />
                <input type="text" name="name" placeholder="Name" onChange={handleChange}/><br />
                <select name="gender" onChange={handleChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select><br />
                <input type="number" name="std" placeholder="Class" onChange={handleChange} /><br />
                <input type="text" name="section" placeholder="Section" onChange={handleChange}/><br />
                <input type="submit" value="Add student" />
            </form>     

            <div>
                    <h3>Delete Student</h3>
                    <input type="text" name="rollno" placeholder="Rollno" onChange={handleChange} />     
                    <button onClick={deleteStudent}>Delete</button>
            </div>
        
            </div>
        </>
    )
}