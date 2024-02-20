import './App.css';
import Toolkit from './Toolkit';

function App() {
  return (
    <div className="App">
        <Toolkit  position="top">
            <button  className='but-top'>T</button>
        </Toolkit>
        <Toolkit position="right">
            <button className='but-right'>R</button>
        </Toolkit>
        <Toolkit position="bottom">
            <button className='but-bottom'>B</button>
        </Toolkit>
        <Toolkit position="left">
            <button className='but-left'>L</button>
        </Toolkit>
        <h3>Hover over me!</h3>
    </div>
  );
}

export default App;
