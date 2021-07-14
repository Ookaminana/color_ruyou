
import Button from '../button/Button';

import './Input.css';

function Input(props) {

    return (
        <div className='input'>
            <label className='lable'>{props.text}</label>
            <input type='text' className='input'></input>
                        
        </div>
        
    )
}

export default Input