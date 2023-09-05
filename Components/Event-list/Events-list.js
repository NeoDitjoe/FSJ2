import style from '@/styles/userInfo.module.css'
import DateIcon from "@/Components/icons/date-icon";
import AddressIcon from "@/Components/icons/address-icon";
import ArrowRightIcon from "@/Components/icons/arrow-right-icon";
import Button from "@/Components/button/button";

const EventsList = ({id, title, image, date, location, description }) => {

    return (
        
        <li className={style.item} key={id}>
                                
        <img src={image} alt={image}/>
        <div className={style.content}>
            <div className={style.summary}>
                <h2>{title}</h2> 
                
                <div className={style.date}>
                    <DateIcon/>
                    <time>{new Date(date).toLocaleDateString('en-GB', {  year: "2-digit", month: "short", day: "numeric",})}</time>
                </div>

                <div className={style.address}>
                    <AddressIcon/>
                    <address>{location.replace(', ', '\n')}</address>
                </div>
            </div>

            <div className={style.actions}>
                <Button link={`/userInfo/${title}`} >
                    <span >Eplore Event</span>
                    <span className={style.icon}><ArrowRightIcon/></span>
                </Button>
            </div>
        </div>
    </li>
    )
}

export default EventsList;