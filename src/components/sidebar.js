
import logo from "../img/logo.svg"
import {links,social} from "../data"
import { RxCross1 } from "react-icons/rx";
import { AppContext } from "./context";
import { useContext } from "react";


export default function Sidebar() {
    const {sidebar1} = useContext(AppContext)
    return (
        <div className="bg-white h-[100vh] w-[26rem]">
            <header className="flex flex-row justify-between items-center p-4">
            <img src={logo} alt="logo"/>
            <button className="text-red" onClick={sidebar1}><RxCross1 color="red" size="32px"/></button></header>
            <ul>
            {links.map((item) => {
                const {id, url, text, icon} = item
                return (
                    <li key={id} className="text-xl text-gray-600 px-4 h-14 hover:bg-gray-300"><a href={url} className="flex flex-row justify-start items-center space-x-4 pt-3"><span>{icon}</span><span className="pl-1">{text}</span></a></li>
                )
            })}

            </ul>
            <ul className="text-blue-400 text-2xl flex flex-row justify-center items-center space-x-4 mt-72 ">

        {social.map((item) => {
            const {id, url, icon} = item
            return (
                <li key={id} className="hover:-translate-y-1 hover:scale-110"><a href={url}>{icon}</a></li>
            )
        })}


            </ul>
        </div>
    )
}