import { createContext, useContext, useState } from "react"

const Context = createContext(null)

export default function StateContext(){
    return useContext(Context)
}

export function ContextProvider({children}){

    const [ status , setStatus ] = useState('')
    const [ message , setMessage ] = useState('')
    const [ title , setTitle ] = useState('')

    return(
        <Context.Provider value={{ status, setStatus, message, setMessage, title, setTitle }}>
            {children}
        </Context.Provider>
    )
}