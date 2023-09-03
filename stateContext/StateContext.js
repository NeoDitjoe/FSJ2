import { createContext, useContext, useState } from "react"

const Context = createContext(null)

export default function StateContext(){
    return useContext(Context)
}

export function ContextProvider({children}){

    const [ first , setFirst ] = useState('')

    return(
        <Context.Provider value={{ first, setFirst }}>
            {children}
        </Context.Provider>
    )
}