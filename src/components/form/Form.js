
import Button from '../Simple/Button/Button';
import Input from '../Simple/Input/Input'
import Photo from '../Simple/Photo/Photo';
import Response from '../Simple/Response/Response';

import './Form.css';

function Form(props) {
    return (
        <div className='form'>
            <Input text='Имя' />
            <Input text='Фамилия' />
            <Input text='Отчество' /> 
            <Photo text='Фото' url={props.url_photo}/>           
            <Button text='Сохранить' class='save'/>
            <Response text='Response'/> 
        </div>
        
    )
}

export default Form