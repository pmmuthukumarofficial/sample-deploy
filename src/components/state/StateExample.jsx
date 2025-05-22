import { Component } from "react";


class StateExample extends Component
{
    constructor()
    {
        super()    
        // code to get data from API         
        this.state = {
            username:'gopi',
            city:'chennai'
        }
        
        // this.state.city = 'thirichy'
    }

    render()
    {
        this.setState({
            city:'vilupuram',
            age:19
        })

        return <>
            <h3>Username : {this.state.username}</h3>
            <h3>City : {this.state.city}</h3>
            <h3>Age : {this.state.age}</h3>
            {
                console.log(this.state)
            }
        </>
    }
}

export default StateExample