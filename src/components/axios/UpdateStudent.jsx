import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";



export default function UpdateStudent()
{
    const [student, setStudent] = useState({})
    const [updateStatus, setUpdateStatus] = useState(false)
    const {id} = useParams()

    const myNavi = useNavigate()


    useEffect(()=>{
        axios.get(`http://localhost:8081/api/students/${id}`)
        .then(res => setStudent(res.data))
        .catch(err => console.log(err))

    }, [])

    function handleChange(e){       
        setStudent({
            ...student, [e.target.name] : e.target.value
        })
    }

    function formSubmit(e){
        e.preventDefault();
        // console.log(student);
        axios.put('http://localhost:8081/api/student', student)
        .then((res) => {
            if(res.data.rollno !== null){                
                // myNavi('/')
                setUpdateStatus(true)
                // setTimeout(()=> myNavi('/'), 1000)
            }   
        })
        .catch(err => console.log(err))
    }

    return (<>
        <h2 className="text-center">Update Student</h2>
        <div className="container w-50">
            <form method="post" onSubmit={formSubmit} id='add-form'>
                <div className="form-group">
                    <input type="text" name="rollno" value={student.rollno} placeholder="Rollno" onChange={handleChange} className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <input type="text" name="name" value={student.name} placeholder="Name" onChange={handleChange} className="form-control" required/>
                </div>
                <div className="form-group">
                    <select className="form-control" value={student.gender} name="gender" onChange={handleChange} required>
                        <option selected disabled>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="femmale">Female</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="number" name="std" value={student.std} onChange={handleChange}  placeholder="Class" className="form-control" required/>
                </div>
                <div className="form-group">
                    <input type="text" name="section" value={student.section} onChange={handleChange}  placeholder="Section" className="form-control" required/>
                </div>
                <input type="submit" value="Update Student"  className="btn btn-warning mr-2"/>                
                <input type="reset" value="Cancel"  className="btn btn-dark"/>
                <Link to='/' className='btn btn-success ml-3'>Home page</Link>
                {
                    (updateStatus && <span className="alert alert-info ml-3" >Updaetd successfully</span>)
                }
            </form>
            
        </div>
    </>)
}