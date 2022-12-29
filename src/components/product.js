
import { useReducer, useState } from "react"
import {useFetch} from "../customHooks/useFetch"



const url = "https://course-api.com/react-tours-project"


export default function Product() {
    const { products, setproducts } = useFetch(url)
    const [readMore, setreadMore] = useState(false)
   

  
    function deletePlace(id) {
        setproducts((products) => { return products.filter(place => place.id !== id)
        })
    }
    console.log(products)
    
    return ( 
      <div className=" grid grid-rows-2 grid-flow-col gap-y-[400px] gap-x-6  bg-blue-300">{products.map((place) => {
        return (
          <div className="h-96 w-[448px] bg-blue-300">
            <div key={place.id} className="flex flex-col justify-center items-center space-y-8 border-2 border-white   bg-white">
            <div className="relative">
            <img src={place.image} alt={place.name} className="w-[30rem] h-72 object-cover"/>
            <h6 className="absolute top-0 right-0 text-white bg-blue-300 rounded w-20 h-8 flex flex-row justify-center items-center">{place.price}</h6></div>
            <h1 className="font-bold text-2xl">{place.name}</h1>
            <div className="">
            <p>{readMore ? place.info : `${place.info.substring(0, 200)}...`}</p> <button className="text-blue-300" onClick={() => {setreadMore(!readMore)}}>{readMore ? "Show less" : "Read more"}</button></div>
            <button className="bg-blue-500 text-white h-10 w-28 rounded" onClick={() => {deletePlace(place.id)}}>Not Intersted</button>
            </div> </div>)
        
      })}</div>
      
    )
}