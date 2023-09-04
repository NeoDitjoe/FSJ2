import Link from "next/link";
import style from 'Components/button/button.module.css'

const Button = ({link, children}) => {
    return (
        <Link href={link} className={style.btn}>{children}</Link>
    )
}
export default Button;