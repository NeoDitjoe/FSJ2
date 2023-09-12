import EventsList from "@/Components/Event-list/Events-list";
import Button from "@/Components/button/button";
import { getFilteredEvents } from "@/Api/Api";
import { useRouter } from "next/router";
import style from 'styles/userInfo.module.css'
import Error from "@/Components/Error/Error";
import { useEffect, useState } from "react";
import useSWR from "swr";

const FilteredEvent = (props) => {

    const [events, setEvents ] = useState(null)

    const router = useRouter()
    const FilterPath = router.query.slug

    const { data, error } = useSWR("https://todoapp-5c0c7-default-rtdb.firebaseio.com/Events.json", (url) => fetch(url).then(res => res.json()))

    useEffect(() => {
        if(data){
            const eventsArray = []

            for ( const key in data){
                eventsArray.push({
                    id: key,
                    ...data[key]
                })
            }
    
    
            setEvents(eventsArray)
        }

        console.log(events)
    }, [data])

    if(!events){
        return (
            <p className="center">Loading...</p>
        )
    }

    const filteredYear = FilterPath[0]
    const filteredMonth = FilterPath[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    
    if (isNaN(numYear) || isNaN(numMonth) || numYear < 2020 || numMonth < 1 || numMonth > 12 || error){
        return (
            <div className="center">
                <Error>
                    <p>Invalid Filter</p>
                </Error>
                <Button link={'/userInfo'} children={'Show all Events'}/>
            </div>
        )
    }

    let filteredEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
      });

    // const filteredEvents = props.event

    if (!filteredEvents || filteredEvents.length === 0){
        return (
            <div className="center">
                <Error>
                    <p>No events found</p> 
                </Error>
                <Button link={'/userInfo'} children={'Show all Events'}/>
            </div>
        )
    }

    const date = new Date(numYear, numMonth -1)

    return (
        <div className="center">
            <h3>Events in {new Date(date).toLocaleDateString('en-GB', {  year: "2-digit", month: "short"})}</h3>
            <Button link={'/userInfo'} children={'Show all Events'}/>

            <ul className={style.list}>
                {
                    filteredEvents.map((item) => {
                        return (
                            <EventsList {...item}/>
                        )
                    })
                }
            </ul>
        </div>
    );
}

// export async  function getServerSideProps(context){
//     const { params } = context;

//     const FilterPath = params.slug

//     const filteredYear = FilterPath[0]
//     const filteredMonth = FilterPath[1]

//     const numYear = +filteredYear
//     const numMonth = +filteredMonth

//     if (isNaN(numYear) || isNaN(numMonth) || numYear < 2020 || numMonth < 1 || numMonth > 12){
//         return {
//             // notFound: true,
//             hasError: true
//         }
//     }

//     const filteredEvents =  await getFilteredEvents({ year: numYear, month:numMonth })

//     return {
//         props:{
//             event: filteredEvents,
//             year: numYear,
//             month: numMonth
//         }
//     }
// }

export default FilteredEvent;