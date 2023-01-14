



import Context from "./componenets/context";
import hero from "./img/hero.svg"
 

function App() {
  
 
  return ( 
    <div style={{
      background: `url(${hero})`,
      backgroundRepeat: 'no-repeat'}}
  
      className="h-screen w-screen bg-origin-border">
        <Context/>

  </div>
  ) 
  }

export default App;
