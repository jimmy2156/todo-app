
import { useEffect, useState } from "react"
import person from "../data"
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { FaQuoteLeft } from "react-icons/fa";


export default function Review() {
    const [value, setvalue] = useState(0)
    const {image,name,quote,title} = person[value]

   

 const checkNumber = (number) => {
    if (number > person.length - 1) {
    return 0    
    }
    if (number < 0) {
        return person.length - 1
    }
    return number
 }
    

  const increment = () => {
    setvalue((value) => {
        let newValue = value + 1;
        return checkNumber(newValue)
    })
  }
  const descrement = () => {
    setvalue((value) => {
        let newValue = value - 1;
        return checkNumber(newValue)
    })
  }
  useEffect(() => {
    let slider = setInterval(() => {
    setvalue((value) => {
            let newValue = value + 1;
            return checkNumber(newValue)
        })}, 3000);
        return () => clearInterval(slider);

        
    }, [value])

 
 
  
    return (
        <div className="flex flex-row justify-center items-center space-x-6">


<button className="bg-gray-600 text-white" onClick={increment} type="button"><BiChevronLeft size="40px"/></button> 
<div className="flex flex-col justify-center items-center space-y-10 w-[34rem]">
    <img src={image} alt={name} className="h-36 w-40 object-cover rounded-full"/>
    <div className="flex flex-col justify-center items-center">
    <h1 className="uppercase text-orange-600 font-bold text-lg">{name}</h1>
    <h2 className="text-gray-500 text-lg capitalize">{title}</h2></div>
    <h3 className="w-[33rem] text-gray-500 text-center leading-relaxed text-lg">{quote}</h3>
    <div><FaQuoteLeft color="orange" size="40px"/></div>
</div>
<button className="bg-gray-600 text-white " onClick={descrement} type="button"><BiChevronRight size="40px"/></button>

        </div>
    )
}