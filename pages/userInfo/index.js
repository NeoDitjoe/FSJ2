import Data from "@/Data/Data";
import style from 'styles/userInfo.module.css'
import EventSearch from "@/Components/EventSearch/event-search";
import { useRouter } from "next/router";
import EventsList from "@/Components/Event-list/Events-list";

//pt2
import { getFeaturedEvents } from "@/Api/Api";
import { useEffect } from "react";

const index = (props) => {

    const router = useRouter()

    function EventHandler(year, month){
        const fullPath = `/userInfo/${year}/${month}`

        router.push(fullPath)
    }

    return (
        <>
            <EventSearch onSearch={EventHandler}/>

            <ul className={style.list}>        
            
                {
                    props.featuredEvents.map((item) => {
                        return (
                            <EventsList {...item}/>
                        )
                    })
                }
            </ul>
        </>
    )
}

export async function getStaticProps(context){
    const featuredEvents = await getFeaturedEvents()

    return {
        props: {
            featuredEvents : featuredEvents
        },
        revalidate: 10
    }
}

export default index;