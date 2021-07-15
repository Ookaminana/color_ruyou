import './Response.css';

function Response(props) {

    return (
        <div className='response-box'>
            <label className='lable'>{props.text}</label>
            <div className='response'></div>              
        </div>
        
    )
}

export default Response