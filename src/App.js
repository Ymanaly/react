
import { useState } from 'react';
import './App.css';

function App() {
  const [color,setColor] = useState(true)
  
  console.log(color);
  return (
    <div className="App">
      <div className='wrapper'>
        {
          color ? <button className='blue' onClick={() => setColor(!color)}>A</button> :  <button className='green' onClick={() => setColor(!color)}>B</button>
        }
      </div>
    </div>
  );
  
}

export default App;
