
import { useState } from "react";
import text from "../data"


export default function Loremipsum() {
  const [count, setcount] = useState(0)
  const [text1,settext1] = useState([])
  
 
 
 const handleSubmit = (event) => {
    event.preventDefault();
  settext1(text.slice(0, count)) 

  }
 

 
    return (
        <div>
     <form onSubmit={handleSubmit}>
  <label for="quantity">Quantity (between 1 and 5):</label>
  <input type="number" min="0" max="5" name="quantity" id="quantity" value={count} onChange={(e) => setcount(e.target.value)}/>
  <button className="border-2 border-gray-600" type="submit">GENERATE</button>
</form>
{text1.map((item,index) => {
    return (
        <p key={index}>{item}</p>
    )
})}


        </div>
    )
}