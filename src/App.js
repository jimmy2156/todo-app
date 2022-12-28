
import { useState } from 'react';
import './App.css';
import List from './components/list';




function App() {
  const [show, setshow] = useState(true)

  return (
    <div className="App bg-blue-200 h-screen w-screen flex flex-row justify-center items-center">
     <div className="bg-white h-[690px] rounded flex flex-col justify-center items-center space-y-6">
        
        {show ? <List /> : <h1 className="bg-white text-4xl h-20 flex flex-col justify-center items-center">O birthday left</h1>}
        <button className='h-10 w-72 bg-gray-700 rounded text-white' onClick={() => setshow(false)}>Clear All</button>
        
        
        </div>

      
      </div>

   
    
  );
  }

export default App;
