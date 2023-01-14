
import { useContext } from "react"
import sublinks from "../data"
import {AppContext}from './context'
import { RxCross1 } from "react-icons/rx";

export default function Sidebar() {
  const {toggle, toggleChange} = useContext(AppContext)
  
    return (
        <div className="bg-slate-50 h-[34rem] border-2 border-gray-300 w-80 drop-shadow-[190px_190px_190px_rgba(128,128,128)] rounded-lg">
      
      <button className="fixed top-0 right-0 p-4" onClick={toggleChange}><RxCross1 size="25px"/></button> 
      {sublinks.map((item, index) => {
        const {links,page} = item
        return (<div className="mt-14 space-y-4 ml-8">
          
            <h1>{page}</h1>
          
            <ul key={index} className="flex flex-row justify-start items-center space-x-4">
          {links.map((link,index) => {
            const {url,label,icon} = link
            return (
                <li key={index} className="" ><a href={url} >{icon} {label}</a></li>
            )
          })}
            </ul>
            </div>
        )

      })}
        </div>
    )
}