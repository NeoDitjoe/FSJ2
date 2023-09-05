import Link from "next/link";
import { useRouter } from "next/router"; 
import Data from "@/Data/Data";
import { useEffect } from "react";
import style from 'styles/user-data.module.css'
import AddressIcon from "@/Components/icons/address-icon";
import DateIcon from "@/Components/icons/date-icon";
import Button from "@/Components/button/button";

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
                            <div key={item.id} className={style.item}>
                                <div className={style.title}>
                                    <h2>{item.title}</h2>
                                </div>

                                <div className={style.card}>
                                    <div className={style.image}>
                                        <img src={item.image} alt={item.image}/>
                                    </div>

                                    <div>
                                        <div className={style.date}>
                                            <DateIcon/>
                                            <time>{new Date(item.date).toLocaleDateString('en-GB', {  year: "2-digit", month: "short", day: "numeric",})}</time>
                                        </div>

                                        <div className={style.address}>
                                            <AddressIcon/>
                                            <address>{item.location.replace(', ', '\n')}</address>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.description}>
                                    <p>{item.description}</p>
                                </div>
                                
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
            {a()}
            <Button link='.' children={'back'}/>
        </>
    )
}

export default index;