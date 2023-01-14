
import logo from "../img/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./sidebar";
import { useContext, useEffect } from "react";
import{AppContext} from "./context"
import Submenu from "./submenu";
import { useState } from "react";

export default function Navbar() {
    const [page, setpage] = useState("")
    const [subMenu, setsubMenu] = useState(false)
    const [right, setright] = useState(0)
    const [left, setleft] = useState(0)
    const {toggle, toggleChange} = useContext(AppContext)

const changeSubmenu = (event) => {
    const tempBtn = event.target.getBoundingClientRect()
    console.log(tempBtn)
    let centre = (tempBtn.right + tempBtn.left) / 2
    let bottom = tempBtn.bottom - 3
    setleft(centre)
    setright(bottom)
  

    
    setpage(event.target.textContent)

    setsubMenu(true)
}
useEffect(() => {
    setTimeout(() => {
        setsubMenu(false)
    }, 10000)
}, [page])
    
    
    return (
        <div className="md:flex md:flex-row md:justify-between md:items-center md:px-8">
            <div className="flex flex-row justify-between items-center p-4">
            <img src={logo} alt="logo"/>
            
            <button className="bg-black text-white rounded py-2 px-4 md:hidden" onClick={toggleChange}><RxHamburgerMenu size="26px"/></button></div>
           <div className="ml-6"> { toggle && <Sidebar/> }</div>
           <div className="md:pr-80 md:text-white md:space-x-20 md:text-xl md:font-semibold hidden md:inline">
           <button onMouseOver={changeSubmenu}>Products</button>
           <button onMouseOver={changeSubmenu}>Developers</button>
           <button onMouseOver={changeSubmenu}>Company</button>
           </div>
           {subMenu && <Submenu page={page} setsubMenu={setsubMenu} right={right} subMenu={subMenu} left={left} />}
           <button className="hidden md:inline bg-black text-white w-24 h-8 rounded pb-1">Sign In</button>
        </div>)
}