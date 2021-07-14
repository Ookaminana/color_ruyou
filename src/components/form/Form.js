
import Button from '../Simple/button/Button';
import Input from '../Simple/input/Input'
import Photo from '../Simple/photo/Photo';
import Response from '../Simple/response/Response';

import './Form.css';

function Form() {
    return (
        <div className='form'>
            <Input text='Имя' />
            <Input text='Фамилия' />
            <Input text='Отчество' /> 
            <Photo text='Фото'/>           
            <Button />
            <Response text='Response'/> 
        </div>
        
    )
}

export default Form