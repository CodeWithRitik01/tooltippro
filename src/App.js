import './App.css';
import Tooltip from './Tooltip';

function App() {
  return (
    <div className="App">
        <Tooltip  position="top">
            <button  className='but-top'>T</button>
        </Tooltip>
        <Tooltip position="right">
            <button className='but-right'>R</button>
        </Tooltip>
        <Tooltip position="bottom">
            <button className='but-bottom'>B</button>
        </Tooltip>
        <Tooltip position="left">
            <button className='but-left'>L</button>
        </Tooltip>
        <h3>Hover over me!</h3>
    </div>
  );
}

export default App;
