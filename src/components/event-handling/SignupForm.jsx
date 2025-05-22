import { useState } from "react"
import './SignupForm.css'

export default function SignupForm()
{
    const [user, setUser] = useState({})

    function handleChange(e){
        setUser({...user, [e.target.name] : e.target.value})
    }

    function formSubmit(e)
    {
        e.preventDefault();
        console.log(user);
    }

    return <>
        <center><h2>SignUp </h2></center>
        <form method="post" onSubmit={formSubmit} className="form-box">        
            <input type="text" name="fullName" className="form-ele" placeholder="Full Name" onChange={(e) =>  setUser({...user, [e.target.name] : e.target.value})} />
            <input type="email" name="email" className="form-ele" placeholder="Email" onChange={(e) =>  setUser({...user, [e.target.name] : e.target.value})}/>
            <input type="tel" name="mobile" className="form-ele"  placeholder="Mobile no" onChange={(e) =>  setUser({...user, [e.target.name] : e.target.value})}/>
            <input type="text" name="username" className="form-ele" placeholder="Username" onChange={(e) =>  setUser({...user, [e.target.name] : e.target.value})} />
            <input type="password" name="password" className="form-ele" placeholder="Password" onChange={handleChange} /> <br />
            <input type="submit" value="Signup" className="btn-submit" />
        </form>

        <form action="">
            <div className="form-inline">
                <input type="text" className="form-control" />
            </div>
        </form>
    </>
}