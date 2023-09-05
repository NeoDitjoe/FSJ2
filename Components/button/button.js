import Link from "next/link";
import style from 'Components/button/button.module.css'

const Button = ({link, children, button, click}) => {
    if(link){
        return (
            <Link href={link} className={style.btn}>{children}</Link>
        )
    } else{
        return(
            <button className={style.btn} onClick={click}>{button}</button>
        )
    }
}
export default Button;