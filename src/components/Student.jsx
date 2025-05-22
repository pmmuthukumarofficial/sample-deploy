

export default function Student(props)
{
    return <>
         <table border={1} cellPadding={'10px'}>
            <thead>
                <tr>
                    <th>Rollno</th>
                    <th>Name</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.students.map( (stu) => {
                        return <tr>
                            <td>{stu.rollno}</td>
                            <td>{stu.name}</td>
                            <td>{stu.grade}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    
    
    
    
   
}