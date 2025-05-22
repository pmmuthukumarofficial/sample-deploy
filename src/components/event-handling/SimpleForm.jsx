import { useState } from "react"


export default function SimpleForm()
{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function usernameHandle(e)  // handler
    {
        // console.log(e.target.value);
        setUsername(e.target.value)
    }
    function passwordHandle(e)
    {
        setPassword(e.target.value)
    }

    function formSumbit(e)
    {
        const user = {
            username: username,
            password:password
        }

        // send user to api
    }

    return <>
        {username}
        {password}
        <form method="post" >
            <input type="text" name="username" placeholder="Username" onChange={usernameHandle}/>
            <input type="password" name="password" placeholder="Password" onChange={passwordHandle}/>
            <input type="submit" value="Login" />
        </form>
    </>
}