
import './App.css';
import Menu from './components/Menu/Menu';
import Form from './components/Form/Form'
import Palette from './components/Palette/Palette'

function App() {

  const state = {
    colors:['#FF453A','#FF9F0A','#FFD60A','#32D74B','#64D2FF','#0A84FF','#BF5AF2','#FF375F']
  }

  return (
    <div className='main'>
      <div className="App">
        <Menu />      
        <Form />
        <Palette colors={state.colors} />
      {/* <Tabs selected={0}>
        <Pane lable='Form'>
          <Menu />      
          <Form />
        </Pane>
        <Pane lable='Color'>
          <Menu />      
          <Form />
        </Pane>
      </Tabs> */}
      
      </div>
    </div>
    
  );
}

export default App;
