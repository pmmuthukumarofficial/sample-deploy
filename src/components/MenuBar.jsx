import Logo from '../assets/images/logo.png'
import './MenuBar.css'

export default function MenuBar()
{
    const username ="newme"
        
    return <>
        <div className="navbar">
            <div id="logo">
                <img src={Logo} alt="logo" />
                {/* <img src="../src/assets/images/logo.png" alt="logo" /> */} 
            </div>
            <div className="menu">
                {/* {username} */}
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact us</a></li>
                </ul>
            </div>
        </div>
    </>
}