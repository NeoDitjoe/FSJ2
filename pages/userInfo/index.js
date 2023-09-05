import Data from "@/Data/Data";
import style from 'styles/userInfo.module.css'
import EventSearch from "@/Components/EventSearch/event-search";
import { useRouter } from "next/router";
import EventsList from "@/Components/Event-list/Events-list";

const index = () => {

    const router = useRouter()

    function EventHandler(){
        const fullPath = `/userInfo/${year.value}/${month.value}`

        router.push(fullPath)
    }

    return (
        <>
            <EventSearch onSearch={EventHandler}/>

            <ul className={style.list}>        

                {
                    Data.map((item) => {
                        return (
                            <EventsList {...item}/>
                        )
                    })
                }
            </ul>
        </>
    )
}


export default index;