import './Photo.css';
import { ReactComponent as Icon } from './photo.svg'

function Photo(props) {

    return (
        <div className='box photo-box'>
            <label className='lable'>{props.text}</label>
            {/* <img src='../../../img/photo.png'/>              */}
            <Icon />
        </div>
        
    )
}

export default Photo