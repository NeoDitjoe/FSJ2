import Button from "../button/button";
import style from 'Components/EventSearch/event-search.module.css'

const EventSearch = () => {
    return (
        <form className={style.form}>
            <div className={style.controls}>
                <div className={style.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year">
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>

                <div className={style.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month"> 
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                </div>
            </div>

            <Button button={'Find Event'}/>
        </form>
    )
}


export default EventSearch;