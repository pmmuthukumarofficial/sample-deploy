import { useEffect } from "react"
import { useState } from "react"



export default function TeacherRecords()
{
    const [teachers, setTeachers] = useState([])

    const [weather, setWeather] = useState({})

    useEffect(()=> {
    const records = [
        {
            empId:'STA1902',
            name:'hariharan',
            role:'associate professor'
        },
        {
            empId:'STA1989',
            name:'priya',
            role:'assistant professor'
        },
    ]
        //get API
        setTeachers(records)

    }, [])


    return <>
            <h2>All Teachers</h2>
            <table border={1} cellPadding="10px">
                <thead>
                    <tr>
                        <th>Emp id</th>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    teachers.map(stu => {
                        return <tr>
                            <td>{stu.empId}</td>
                            <td>{stu.name}</td>
                            <td>{stu.role}</td>
                        </tr>
                    })
                   }
                </tbody>
            </table>
    </>
}