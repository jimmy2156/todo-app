

import './App.css';

import Product from './components/product';
import { useFetch } from './customHooks/useFetch';

const url = "https://course-api.com/react-tours-project"


function App() {
  const {loading} = useFetch(url)

  return (
    <div className="App bg-blue-300 min-h-screen w-full">
    { loading ? <Product /> : <div className='text-3xl font-bold text-blue-800'>Loading...</div>}



      
      </div>

   
    
  );
  }

export default App;
