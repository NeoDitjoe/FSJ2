import Link from "next/link";
import { useEffect } from "react";
import Data from "@/Data/Data";
import StateContext from "@/stateContext/StateContext";
import style from 'styles/userInfo.module.css'
import Button from "@/Components/button/button";
import ArrowRightIcon from "@/Components/icons/arrow-right-icon";
import AddressIcon from "@/Components/icons/address-icon";
import DateIcon from "@/Components/icons/date-icon";

const index = () => {

    // const date = new Date(item.date).toLocaleDateString('en-GB', {  year: "2-digit", month: "short", day: "numeric",})
    // const address = location.replace(', ', '\n')
    return (
        <>
            <h1>user data</h1>
            <Button link={'/'} children={'back'}/>

            <ul className={style.list}>        

                {
                    Data.map((item) => {
                        return (

                            <li className={style.item}>
                                
                                <img src={item.image} alt={item.image}/>
                                <div className={style.content}>
                                    <div className={style.summary}>
                                        <h2>{item.title}</h2> 
                                        
                                        <div className={style.date}>
                                            <DateIcon/>
                                            <time>{new Date(item.date).toLocaleDateString('en-GB', {  year: "2-digit", month: "short", day: "numeric",})}</time>
                                        </div>

                                        <div className={style.address}>
                                            <AddressIcon/>
                                            <address>{item.location.replace(', ', '\n')}</address>
                                        </div>
                                    </div>

                                    <div className={style.actions}>
                                        {/* <Link href={`/userInfo/${item.title}`} >Explore Event</Link> */}
                                        <Button link={`/userInfo/${item.title}`} >
                                            <span >Eplore Event</span>
                                            <span className={style.icon}><ArrowRightIcon/></span>
                                        </Button>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}


export default index;