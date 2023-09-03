import Link from "next/link";
import { useRouter } from "next/router";    
import StateContext from "@/stateContext/StateContext";
import Data from "@/Data/Data";
import { useEffect } from "react";

const index = () => {
    const { setFirst, first } = StateContext()
    const router = useRouter()

    const data = {
        one : 'this is one',
        two : 'this is two',
        three : 'this is three',
        four : 'this is four',
        five : 'this is five',
        six : 'this is six',
        seven : 'this is seven'
    }

    useEffect(() => {
        
        const m = Data.filter((k) => {
          return k.id.includes(router.query.userdata)

        })

        console.log(m.map(m => m.title))
       
    } )

    
    function a(){
        const m = Data.filter((k) => {
            return k.id.includes(router.query.userdata)
          })
          return (
           <>
                { 
                    m.map((m) => {
                        return (
                            <>
                                <h2>{m.title}</h2>
                                <p>{m.description}</p>
                                <p>{m.location}</p>
                                <p>{m.date}</p>
                            </>
                        )
                    })
                }
            </>
          )
    }

    useEffect(() => {

       a()
    })

    return (
        <>
            
            <p onClick={() => {setFirst(null)}}><Link href={'.'}>back</Link></p>

            {a()}
        </>
    )
}

export default index;