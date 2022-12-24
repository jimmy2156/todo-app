import { useState } from "react"
import { RiDeleteBinFill } from "react-icons/ri";
import { v4 } from "uuid";



export default function Main() {
 const [task, settask] = useState("")
 const [lists, setlists] = useState([])
 

const handleChange = (event) => {
    settask(event.target.value)
}
const submitChange = (event) => {
    event.preventDefault()
    settask('')
    setlists(oldlists => {return [...oldlists, {id: v4(), task1: task}]})
    
}


function deleteList(id1) {
    setlists(oldlists => oldlists.filter(list => list.id !== id1))
}
  




console.log(lists)
    return (
        <div className="bg-stone-500 h-screen w-screen">
            <div className="flex flex-col justify-center items-center space-y-10">
            <h1 className="text-7xl font-bold">TO DO APP</h1>
            <form className="flex flex-col justify-center items-center space-y-8" onSubmit={submitChange}>
            <input className="w-96 h-10 placeholder-shown:border-gray-500 hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:ring focus:ring-black text-gray-700 text-xl rounded-md p-2" type="text" value={task} onChange={handleChange} placeholder="Please type your tasks here"/>
            <button type="submit" className=" hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:ring focus:ring-black text-gray-700 text-xl rounded-md p-2 bg-white h-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ">SUBMIT</button></form> 
            
            </div>
            

            <ul className="text-black text-4xl flex flex-col justify-center items-center space-y-8 list-decimal list-outside">
                {lists.slice(0, 7).map((list, index) => {
                    
                    return <div key={list.id} className="flex flex-row justify-center items-center space-x-6">
                        <li>{list.task1}</li> 

                        <button onClick={() => deleteList(list.id)}className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 "><RiDeleteBinFill size="20px"/></button>
                        </div>
                         
                })}
            </ul>
          
        </div>
    )
}