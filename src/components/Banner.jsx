import bannerImg from '../assets/images/image1.png'
import './Banner.css'

export default function Banner()
{
    const bannerStyle ={
        width:"500px",     
        background:"yellow"               
    }

    // const bannerImg = "https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/11/boxImg_pharmacy.jpg"
    return <>
        <div className="banner">
            <div>
                <h1>Give Your Workout <br />A New Style!</h1>
                <p>Success isn't about greatness.It's about consistency. consistent hardwork gains Success. greatness will come.</p>
            </div>
            <div>
                {/* <img src={bannerImg} alt="" style={{
                    width:"500px",                    
                }} /> */}
                <img src={bannerImg} alt="" style={bannerStyle} />
            </div>
        </div>
    </>
}