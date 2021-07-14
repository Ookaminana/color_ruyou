import './Photo.css';

function Photo(props) {

    return (
        <div className='box'>
            <label className='lable'>{props.text}</label>
            <img src='img/pict.png'></img>              
        </div>
        
    )
}

export default Photo