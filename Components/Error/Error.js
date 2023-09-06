import { Fragment } from "react";
import style from '@/Components/Error/Error.module.css'

const Error = ({children}) => {
    return (
        <Fragment>
            <div className={style.error}>
                {children}
            </div>
        </Fragment>
    )
}

export default Error;