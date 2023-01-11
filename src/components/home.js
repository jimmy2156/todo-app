
import { RxDragHandleHorizontal } from "react-icons/rx";
import Sidebar from "./sidebar";
import Modal from "./modal";
import { useContext } from "react";
import { AppContext } from "./context";

export default function Home() {
  const {sidebar1, showModal1, sidebar, showmodal} = useContext(AppContext)
    return (

<article className="flex flex-row gap-x-6">
{ sidebar && <Sidebar/> }
<div>
<button onClick={sidebar1}><RxDragHandleHorizontal size="40px"/></button>
<button className="fixed top-96 right-[660px] bg-blue-700 text-white w-36 h-12 rounded border-2 border-white hover:-translate-y-1 hover:scale-110" onClick={showModal1}>Modal</button>
</div>
{ showmodal && <Modal/>}





</article>
    )
}