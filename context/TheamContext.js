'use client'
import { useState, createContext  } from "react";

export const TheamContext= createContext();

export const TheamProvider =({children}) =>{
    const [mode,setMode] = useState("dark");

    const toggle = () => {
        setMode(mode === "dark"? "light" : "dark");
    }
    return(
    <TheamContext.Provider value={{toggle, mode}}>
        <div className={`theam ${mode}`}>
            {children}
        </div>
    </TheamContext.Provider>
    )

}