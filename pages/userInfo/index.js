import Link from "next/link";
import { useEffect } from "react";
import Data from "@/Data/Data";
import StateContext from "@/stateContext/StateContext";

const index = () => {

    const { first, setFirst } = StateContext()

    // useEffect(() => {
    //     console.log(first.id)
    // }, [])

    return (
        <>        
            <h1>user data</h1>
            <p><Link  href={'/'}>back</Link></p>

            {
                Data.map((s) => {
                    return <ul><li key={s.id}  onClick={() => {setFirst(s)}}><Link href={`/userInfo/${s.id}`} >{s.title}</Link></li></ul>
                })
            }
        </>
    )
}


export default index;