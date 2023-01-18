 import { useContext } from "react"
import { AppContext } from "./context"




export default function Homepage() {

    const {state} = useContext(AppContext)
    return (
        <div>
      <h1>UseReducer</h1>
      <h2>{state.amount}</h2>



        </div>
    )
}