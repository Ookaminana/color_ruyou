
import Button from '../Simple/Button/Button';
import Input from '../Simple/Input/Input'
import Photo from '../Simple/Photo/Photo';
import Response from '../Simple/Response/Response';

import './Form.css';

function Form(props) {
    const state = {
        lables: ['Имя','Фамилия','Отчество']
    }   
     
    return (
        <div className='form'>
            {state.lables.map((elem) =>{
                return(<Input text={elem} />)
            })}            
            <Photo text='Фото' url={props.url_photo}/>           
            <Button text='Сохранить' class='save'/>
            <Response text='Response'/> 
        </div>
        
    )
}

export default Form