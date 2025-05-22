import AdminDashboard from "./AdminDashboard"
import UserDashboard from "./UserDashboard"


export default function ConditionalRender()
{
    const user ={
        username:"kumar",
        fullName: 'kumar',
        gender:'male',
        role:'user',
        due: 21,
        offers:10
    }

    return <>
        {/* <p> Hello {user.fullName}  { user.role==='admin' ? 'have a nice day': 'good morning!' } </p> */}

        {
            (user.due <=5)&& <div style={{background:'red', padding:'10px', color:'#fff'}}>
            Hey buddy ! Your subscription going to end {user.due} days. So hurry up
            </div>        
        }

        {/* <p>your have 4 offer(s)</p> */}

        {/* <p>You have {user.offers}  { user.offers>1 ?'offers':'offer'} </p> */}

        {
            user.role ==='admin' ? <AdminDashboard/> :<UserDashboard />
        }

    </>
}

/*
 ? : -> if -else
 && -> if
*/