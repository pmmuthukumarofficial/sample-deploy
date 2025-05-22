import { Component } from "react"


export default class StudentRecords extends Component
{
    constructor()
    {
        super()

        this.state={
            branch : 'OMR',
            students : [
                {
                    rollno:1001,
                    name:'ajay',
                    age:13
                },
                {
                    rollno:1002,
                    name:'sidharth',
                    age:14
                },
            ]
        }
        // this.state.students[1].name = this.state.students[1].name.toUpperCase()
        // this.state.branch = 'Tambaram'
    }

    render()
    {
    //    this.setState({branch:'chorompet'})
        return <>
                <h2>{this.state.branch} students</h2>
            {
                this.state.students.map(stu => {
                    return <div >
                        <h4>Rollno : {stu.rollno}</h4>
                        <h3>Name : {stu.name}</h3>
                        <h3>Age : {stu.age}</h3>
                        <hr />
                    </div>
                } )
            }
        </>
    }
}