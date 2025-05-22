import Child from "./Child";


export default function Parent()
{
    const branch = 'OMR'
    const records = [
        {
            name:'sandeep',
            gender:'male',
            city:'trichy'
        },       
        {
            name:'vasanth',
            gender:'male',
            city:'madurai'
        },
        {
            name:'harini',
            gender:'female',
            city:'madurai'
        },
        {
            name:'priya',
            gender:'female',
            city:'chennai'
        },
    ]
    return <>
            <h2>All Users : {branch}</h2>         
        <div className="users-list" style={{display:'flex', justifyContent:'center'}}>              

            {/* <Child name='vasanth' gender='male' city='madurai'/>
            <Child name='bharath' gender='male' city='chennai' /> */}

            {/* <Child name={records[0].name} gender={records[0].gender} city={records[0].city} />
            <Child name={records[1].name} gender={records[1].gender} city={records[1].city} /> */}
            
            {
                records.map(user =>
                   <Child name={user.name} gender={user.gender} city={user.city}/>
                )
            }           
          
        </div>
    </>
}