import { Component } from "react";


class ChildClass extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return <>
            {/* <h4>Name : {this.props.name}</h4>
            <h4>Name : {this.props.city}</h4> */}

            <div className="user">
                <h4>Fullname :{this.props.name}</h4>
                <p>Gender : {this.props.gender}</p>
                <p>City : {this.props.city}</p>
            </div>
        </>
    }
}
export default ChildClass