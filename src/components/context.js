
import { createContext, useEffect, useReducer } from "react"
import data from "../data"
import Cart from "./cart"
import Homepage from "./homepage"
import reducer from "./reducer"

export const AppContext = createContext(null)

const defaultstate = {
    products: data,
    isLoading: false,
    amount: 0,
    total: 0
    
}

export default function Context() {
    const [state, dispatch] = useReducer(reducer, defaultstate)
    const increment = (id) => {
        dispatch({type: 'INCREASE', payload: id})
    }
    const decrement = (id) => {
        dispatch({type: 'DECREASE', payload: id})
    }
    const remove = (id) => {
        dispatch({type: 'REMOVE', payload: id})
    }
    const removeAll = () => {
        dispatch({type: 'DELETE_ALL'})
    
    }
    useEffect(() => {

        dispatch({type: 'GET_TOTAL'})

    }, [state.products])
    return (
        <AppContext.Provider value={{state, increment, decrement, remove, removeAll}}>
        <div>
<Homepage/>
<Cart/>
        </div>
        </AppContext.Provider>
    )
}
