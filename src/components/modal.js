

import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { AppContext } from "./context";


export default function Modal() {
    const {showModal1} = useContext(AppContext)
    return (
        <div className="bg-white w-[33rem] h-[24rem] flex flex-row justify-center items-center mt-56 ml-[440px] border-2 border-black relative">
<h1>Modal</h1>
<button className="absolute top-0 right-0 hover:-translate-y-1 hover:scale-110" onClick={showModal1}><RxCross1 color="black" size="32px"/></button>
        </div>
    )
}