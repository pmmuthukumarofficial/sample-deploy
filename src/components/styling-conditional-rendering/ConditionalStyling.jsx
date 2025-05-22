import './Styling1.css'
import Button from 'react-bootstrap/Button';
import Post from './Post';

export default function ConditionalStyling()
{
    const user ={
        id:10203,
        name:'jhonson',
        age:19,
        city:'trichy'
    }

    return <>
            
                <p className={(user.age>18)?'normal':'kids'}>
                    
                    {(user.age>18) ? 'Normal mode' :  'Kids mode'}  </p>

            
            <div className='city-box' style={{      
                borderColor: (user.city ==='chennai') ? 'yellow':'green'
            }}>
                City : {user.city}
            </div>

            <button className='btn btn-primary'>Add</button>
            <Button variant="primary">Add</Button>
            
           <div style={{display:'flex'}}>
                <Post title="My post 1" text="Sample post content" buttonName="Read more"/>
                <Post title="My post 2" text="Sample post content" buttonName="Read more"/>
           </div>
    </>
}