import { useEffect } from "react";
import style from 'styles/user-data.module.css'
import AddressIcon from "@/Components/icons/address-icon";
import DateIcon from "@/Components/icons/date-icon";
import Button from "@/Components/button/button";
import { getEventById, getAllEvents, getFeaturedEvents } from "@/Api/Api";
import Comments from "@/Components/input/comments";
import Image from "next/image";

const index = (props) => {
    const item = props.eventById;


        if (!item) {
        return (
            <div className="center">
            <p>Loading...</p>
            </div>
        );
    }

    return (
        <>
            {
                <div key={item.id} className={style.item}>
                    <div className={style.title}>
                        <h2>{item.title}</h2>
                    </div>

                    <div className={style.card}>
                        <div className={style.image}>
                            <Image src={'/' + item.image} alt={item.image} width={400} height={400}/>
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
                    <Comments eventId={item.title}/>
                </div>
            }


            <Button link='.' children={'back'}/>
        </>
    )
}

export async function getStaticProps(context){
    const path = context.params.eventId
    const event = await getEventById(path)

    return {
        props: {
            eventById : event
        },
        revalidate: 20
    }
}

export async function getStaticPaths(){
    const data = await getFeaturedEvents()
    // const getid = data.map((item) =>  ({ params :{ product: item.id}}) )
    let getid;

    for( let { id } of data){
        getid = [{ params :{ eventId: id}}]
    }

    return {
        paths: getid,
        fallback: true,
    }
    
}

export default index;
