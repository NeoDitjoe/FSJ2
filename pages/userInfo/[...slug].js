import EventsList from "@/Components/Event-list/Events-list";
import Button from "@/Components/button/button";
import { getFilteredEvents } from "@/Data/Data";
import { useRouter } from "next/router";
import { Fragment } from "react";
import style from 'styles/userInfo.module.css'
import Error from "@/Components/Error/Error";

const FilteredEvents= () => {

    const router = useRouter()
    const FilterPath = router.query.slug

    if(!FilterPath){
        return (
            <p className="center">Loading...</p>
        )
    }

    const filteredYear = FilterPath[0]
    const filteredMonth = FilterPath[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if (isNaN(numYear) || isNaN(numMonth) || numYear < 2020 || numMonth < 1 || numMonth > 12){
        return (
            <div className="center">
                <Error>
                    <p>Invalid Filter</p>
                </Error>
                <Button link={'/userInfo'} children={'Show all Events'}/>
            </div>
        )
    }

    const filteredEvents = getFilteredEvents({ year: numYear, month:numMonth })

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

export default FilteredEvents;