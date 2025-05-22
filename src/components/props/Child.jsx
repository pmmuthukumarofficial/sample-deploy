

// props is object to pass ur data from parent to child component
export default function Child(props)
{
    return <>
         <div className="user" style={{margin:'10px', border:'1px solid #555', padding:'10px'}}>
                <h3>FullName : {props.name}</h3>
                <p>Gender : {props.gender}</p>
                <p>City : {props.city}</p>
                {/* <hr /> */}
         </div>
    </>
}