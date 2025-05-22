import { useReducer, useState } from "react"


export default function FormValidation() {

    const [user, setUser] = useState({})
    const [errors, setErrors] = useState({})

    function handleChange(e) {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    function formValidate(user)
    {
        let status = true;
        let errors = {}

        if (!user.username) {
            errors.username1 = 'username is required'
            status = false
        }
        else if (user.username.length < 8) {
            errors.username2 = 'username must be more than 8 letters'
            status = false
        }

        if (!user.password) {
            errors.password1 = "Password is required"
            status = false
        }
        else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(user.password)) {
            errors.password2 = "Password must contain one small,one cap letter, at least one number, and at least one special character  "
            status = false
        }

        if(!user.email)
        {
            errors.email1='Email is required'
            status=false
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email))
        {
            errors.email2='this is not valid email'
            status=false
        }

        // console.log(errors);
        setErrors(errors)
        return status
    }

    function formSubmit(e) {
        e.preventDefault();
        
        if(formValidate(user))
        {
            // api code to send data
            
            console.log(user);
        }
    }


    return <>

        <form method="post" onSubmit={formSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <span>{!errors.username1 ? '':'*'+errors.username1}{errors.username2}</span><br></br>
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <span>{errors.password1}{errors.password2}</span><br></br>
            <input type="email" name="email" onChange={handleChange} required />
            <span>{errors.email1}{errors.email2}</span><br></br>
            <input type="submit" value="Signup" />
        </form>
    </>
}