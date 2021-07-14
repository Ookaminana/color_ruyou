import './Input.css';

function Input(props) {

    return (
        <div className='input_box box'>
            <label className='lable'>{props.text}</label>
            <input type='text' className='input'></input>                        
        </div>
        
    )
}

export default Input