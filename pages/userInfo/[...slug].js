import EventsList from "@/Components/Event-list/Events-list";
import Data, { getFilteredEvents } from "@/Data/Data";
import { useRouter } from "next/router";

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
        return <p>Invalid Filter</p>
    }

    const filteredEvents = getFilteredEvents({ year: numYear, month:numMonth })

    if (!filteredEvents || filteredEvents.length === 0){
        return <p>No events found</p>
    }

    return (
        <div>
            <h1>Filtered Events</h1>

            {
                    filteredEvents.map((item) => {
                        return (
                            <EventsList {...item}/>
                        )
                    })
                }
        </div>
    );
}

export default FilteredEvents;