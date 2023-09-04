import Link from "next/link";
import style from 'Components/layout/header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <Link href={'/'}>Next Events</Link>
            </div>

            <nav className={style.nav}>
                <ul>
                    <li><Link href={'/userInfo'}>All Events</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;