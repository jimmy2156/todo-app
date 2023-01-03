

import { useEffect, useState } from 'react';
import './App.css';
import Buttonprofile from './components/buttonProfile';

import Profile from './components/profiles';


const url = "https://course-api.com/react-tabs-project"




 

function App() {
  const [loading, setloading] = useState(true)
  const [products11, setproducts11] = useState([])
  const [products1, setproducts1] = useState([])
  const [value, setvalue] = useState(0)

  const getFetch = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setproducts11(products);
    setproducts1(products);
    setloading(false);

  }
  useEffect(() => {
    getFetch()
  }, [])
 
  
  

  

  


 
  if (loading) {
    return (
      <section>
        <h1>loading....</h1>
      </section>
    )
  }



const category = [...new Set(products1.map((candidate) => candidate.company))]
const newCategory = (index) => {
 
 
  setvalue(index)
  

}
const products111 = products11[value]

  return ( 
    <div className="App bg-blue-300 min-h-screen w-full flex flex-row justify-center items-center">
       
<Profile products={products111}/> 
 <Buttonprofile category={category} newCategory={newCategory}/>  </div>
  ) 
  }

export default App;
