import { useState } from "react"



export default function LoginForm()
{
    const [user, setUser] = useState({}) //  {  }  -> append   

    function handleChange(e)
    {
        // console.log(e.target.name) 
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        // console.log(user);
    }

    function formSumbit(e)
    {
        e.preventDefault();  // u should call this method before write action code
        console.log(user);
        // API code here
    }

    return <>
        <form method="post" onSubmit={formSumbit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
            <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
            <input type="submit" value="Login" />
        </form>
    </>
}