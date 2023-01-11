import React, { createContext, useState } from "react";
import Home from "./home";

export const AppContext = createContext(null)


export default function Context() {
    const [sidebar, setsidebar] = useState(false)
    const [showmodal, setshowmodal] = useState(false)


    const sidebar1 = () => {
        setsidebar(!sidebar)
    }
    const showModal1 = () => {
        setshowmodal(!showmodal)
    }

    return (
        <AppContext.Provider value={{sidebar1, showModal1, sidebar, showmodal}}>
        <div>
            <Home/>
            
        </div>
        </AppContext.Provider>
    )


}