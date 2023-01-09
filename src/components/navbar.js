
import { useState, useEffect, useRef } from "react";
import { RxDragHandleHorizontal, RxDragHandleVertical } from "react-icons/rx";
import {links, social} from "../data"




export default function Navbar() {
    const [show, setshow] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef(null)
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (show) {
          linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
          linksContainerRef.current.style.height = '0px';
        }

    }, [show])


    
    return (
        <div className="md:flex md:flex-row md:justify-between md;items-center bg-blue-700 text-white">
           <div className=" flex flex-row justify-between items-center h-16 mx-6"> <h1>Coding Addict</h1>

         <button className="md:hidden" onClick={() => setshow(!show)}>{show ?  <RxDragHandleVertical size="40px"/> : <RxDragHandleHorizontal size="40px"/>}</button>

           </div>
            <div  className="h-0 overflow-hidden md:overflow-visible" ref={linksContainerRef}>
                
            <ul className="flex flex-col justify-center items-center md:flex md:flex-row md:justify-between md:items-center md:w-96 md:mt-6"  ref={linksRef} >

        {links.map((link) => {
            const {id,url,text} = link
            return (
                <li key={id}>
                    <a href={url}>{text}</a>
                </li>
            )
        })}
            </ul>
                 
                
                </div>
            <div>
                <ul className="hidden md:flex md:flex-row md:justify-between md:items-center w-36 mt-6 mx-6">
                    {social.map((item) => {
                        const {id, url, icon} = item
                        return (
                            <li key={id}><a href={url}>{icon}</a></li>
                        )
                    })}
                </ul>
            </div>
           
        </div>
    )
}