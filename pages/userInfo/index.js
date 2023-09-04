import Link from "next/link";
import { useEffect } from "react";
import Data from "@/Data/Data";
import StateContext from "@/stateContext/StateContext";

const index = () => {

    // const date = new Date(item.date).toLocaleDateString('en-GB', {  year: "2-digit", month: "short", day: "numeric",})
    // const address = location.replace(', ', '\n')
    return (
        <>        
            <h1>user data</h1>
            <p><Link  href={'/'}>back</Link></p>

            {
                Data.map((item) => {
                    return (
                        // <ul key={item.title}>
                        //     <li><Link href={`/userInfo/${item.title}`} >{item.title}</Link></li>
                        //     <img src={item.image} alt={item.image}/>
                        // </ul>
                        <li>
                            
                            <img src={item.image} alt={item.image}/>
                            <div>
                                <div>
                                    <h2>{item.title}</h2>
                                    
                                    <div>
                                        <time>{new Date(item.date).toLocaleDateString('en-GB', {  year: "2-digit", month: "short", day: "numeric",})}</time>
                                    </div>

                                    <div>
                                        <address>{item.location.replace(', ', '\n')}</address>
                                    </div>
                                </div>

                                <div>
                                    <Link href={`/userInfo/${item.title}`} >Explore Event</Link>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </>
    )
}


export default index;