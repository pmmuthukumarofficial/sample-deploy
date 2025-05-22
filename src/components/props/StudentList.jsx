import Student from "../Student"


export default function StudentList()
{    
    const records = [
        {
            rollno:1001,
            name:'ajay',
            grade:'A++'
        },
        {
            rollno:1002,
            name:'bala',
            grade:'C'
        },
    ]

    return <>
        <h2>All Students </h2>
        <Student students = {records} />
    </>
}