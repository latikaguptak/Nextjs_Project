import { createContext } from "react";
import { useState } from "react/cjs/react.production.min";

const TheamContext= createContext();

const TheamProvider =() =>{
    const [mode,setMode] = useState("dark");

    const toggleMode = () => {
        setMode(mode === "dark"? "light" : "dark");
    }

}