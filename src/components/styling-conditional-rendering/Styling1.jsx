import './Styling1.css'

export default function Styling1()
{

    const success ={
        'background':'green',
        'padding':'20px',
        'margin':'10px',
        'border-radius':'10px',
        'color':'#fff'
    }

    return <>
        <p style={
            {
                background:'yellow',
                padding:'20px',
                margin:'10px',
                borderRadius:'10px'
            }
        }>Hey ! warning dont close this</p>

        <p style={success}>Login successfully...</p>

        <div className="danger">
            Sorry ! Login failed, Check yout credential
        </div>  

        <div className='alert alert-success'>
            Success
        </div>

        <button className='btn btn-primary'>Add</button>

        

    </>
}