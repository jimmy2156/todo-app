import { useContext } from "react"
import {AppContext} from './context'
import { RxChevronUp, RxChevronDown } from "react-icons/rx";




export default function Cart() {

const {state, increment, decrement, remove, removeAll} = useContext(AppContext)
   
    return (
        <div className="flex flex-col justify-center items-center w-full h-full space-y-8"> 
            
            
            <div className="w-[50rem] space-y-10">
            {state.products.map((phone) => {
                const {id, title, img, amount, price} = phone
                return (
                   <div key={id} className="flex flex-row justify-around items-center">
                    <div className="flex flex-row justify-around items-center w-60 h-26">
                    <img src={img} alt={title} className="w-20 h-16 "/>
                    <div className="flex flex-col justify-start items-start">
                        <h1>{title}</h1>
                        <h2>{price}</h2>
                        <button className="text-white bg-blue-400 rounded" onClick={() => remove(id)}>Remove</button>
                    </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">

                 <button onClick={() => increment(id)}><RxChevronUp/></button>
                 {amount}
                 <button onClick={() => decrement(id)}><RxChevronDown/></button>


                    </div>


                  
                    </div>


                )
            })}</div>
            <div className="flex flex-row justify-between w-[32rem] font-bold text-xl"><h6>Total</h6>
            <h1>{state.total}</h1></div>
              <button className="bg-red-400 text-white w-52 h-10 rounded" onClick={removeAll}>Clear Cart</button>
        </div>
    )
}