import './Color.css';

function Color(props) {
    console.log('COLOR');
    const style = () => ({        
        backgroundColor: props.color,
    })
    console.log(style);
    return (
        <div className='color-box' style={style()}>                                   
        </div>
        
    )
}

export default Color