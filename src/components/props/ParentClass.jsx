import { Component } from "react";
import ChildClass from "./ChildClass";


class ParentClass extends Component
{    
    render()
    {
        const records = [
            {
                name:'sandeep',
                gender:'male',
                city:'trichy'
            },       
            {
                name:'vasanth',
                gender:'male',
                city:'madurai'
            },
            {
                name:'harini',
                gender:'female',
                city:'madurai'
            },
            {
                name:'priya',
                gender:'female',
                city:'chennai'
            },
        ]
    

        return <>
            <h2>All Users</h2>
            {/* <ChildClass name='muthu' city='chennai' /> */}

            {
                records.map(user => <ChildClass name={user.name} gender={user.gender} city={user.city} />)
            }
        </>
    }
}

export default ParentClass