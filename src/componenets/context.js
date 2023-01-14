import { createContext, useState } from "react";
import Homepage from "./homepage";
import Navbar from "./Navbar";



export const AppContext = createContext(null)

export default function Context() {
   
    const [toggle, settoggle] = useState(false)
    
    const toggleChange = () => {
        settoggle(!toggle)
    }
 
    return (
        <AppContext.Provider value={{toggle, toggleChange}}>
        <div>
            <Navbar/>
            <Homepage/>
        </div>
        </AppContext.Provider>
    )
}