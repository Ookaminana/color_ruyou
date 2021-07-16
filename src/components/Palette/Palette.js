import './Palette.css';
import Color from'../Simple/Color/Color'
import Button from '../Simple/Button/Button';

function Palette(props) {
    console.log(props);  
        return (
            <div className='palette-box'>
                {props.colors.map(element => {
                    console.log(element);
                return(<Color color={element}/> )                 
                })} 
                <Button text='Добавить цвет' class='blue'/>                                  
            </div>                       
        )
    
    
}

export default Palette