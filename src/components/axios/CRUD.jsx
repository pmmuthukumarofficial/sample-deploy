import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"


export default function CRUD()
{
    const [students, setStudents] = useState([])

    useEffect(()=>{        
        axios.get('http://localhost:8081/api/students')
        .then((res)=> setStudents(res.data))
        .catch((err) => console.log(err))

    },[students])

    function deleteStudent(rollno){

        axios.delete(`http://localhost:8081/api/students/${rollno}`)
        .then(res => {
            if(res.data.rollno !== null){
                // alert('deleted successfully')
            }
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <h3 className="text-center">Student list</h3>
            <div className="container">
            <Link to='/add-student' className='btn btn-primary'>Add</Link>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Rollno</th>
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Class</th>
                            <th scope="col">Section</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(stu => {
                                return <tr key={stu.rollno}>
                                    <td>{stu.rollno}</td>
                                    <td>{stu.name}</td>
                                    <td>{stu.gender}</td>
                                    <td>{stu.std}</td>
                                    <td>{stu.section}</td>
                                    <td>    
                                        <Link to={`/edit-student/${stu.rollno}`} className="btn btn-info mr-2">Edit</Link>
                                        <button onClick={()=> deleteStudent(stu.rollno)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                
            </div>
        </>
    )
}