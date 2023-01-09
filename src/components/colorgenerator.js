
import { useState } from "react"
import Values from "values.js"

export default function Colorgenerator() {
  const [color, setcolor] = useState("")

  const [value, setvalue] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    let colors = new Values(color).all(10)

    setvalue(colors)
  }
  console.log(value)
    return (
        <div>
 <form onSubmit={handleSubmit}>
    <input type="text" value={color} onChange={(e) => setcolor(e.target.value)}  />
    <button>Generate</button>
 </form>
<div className="grid grid-cols-4 grid-rows-5 text-white">

{value.slice(2,16).map((item, index) => {
  console.log(item)
    const {rgb, hex, weight} = item
    let bgc = rgb.join(",");
    return (
       
        <div key={index} style={{backgroundColor: `rgb(${bgc})`}} className="w-40 h-32"><h2>#{hex}</h2>
        <h3>{weight}%</h3></div>
    )
})}
</div>



        </div>
    )
}