
import Button from '../button/Button';

import './Form.css';

function Form() {
    return (
        <div className='form'>
            <label className='lable'>Имя</label>
            <input type='text' className='input' value='Лев'></input>
            <label className='lable'>Фамилия</label>
            <input type='text' className='input'></input>
            <label className='lable'>Отчество</label>
            <input type='text' className='input'></input>
            <label className='lable'>Фото</label>
            <div className='photo'>
                <img src='../../img/pict.png'></img>  
            </div>
            <Button />
            <label className='lable'>Response</label>
            <div className='response'></div>
            
            {/* <input type='text' className='bigmemo'></input> */}
        </div>
        
    )
}

export default Form