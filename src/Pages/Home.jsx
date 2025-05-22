import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Services from "../components/Services";



export default function Home()
{
    const myNavi = useNavigate()

    function loginCheck()
    {
        myNavi('/contact')
    }

    return <>
        {/* <Header />
        <Services /> */}
        <h2>Home page</h2>

        {/* <Link to='/contact' >Contact</Link> */}

        <button onClick={loginCheck}>Login</button>
    </>
}