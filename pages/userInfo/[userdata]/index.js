import Link from "next/link";
import { useRouter } from "next/router"; 
import Data from "@/Data/Data";
import { useEffect } from "react";

const index = () => {
    const router = useRouter()
    
    function a(){
        const mapOver = Data.filter((item) => {
            return item.title.includes(router.query.userdata)
          })
          return (
           <>
                { 
                    mapOver.map((item) => {

                        const day = new Date(item.date).toLocaleDateString('en-GB', {  year: "2-digit", month: "short", day: "numeric",})
                        return (
                            <div key={item.id}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <div>{item.location.replace(', ', '\n')}</div>
                                <p>{day}</p>
                            </div>
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
            <Link href={'.'}>back</Link>

            {a()}
        </>
    )
}

export default index;