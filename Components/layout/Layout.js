import { Fragment } from "react";
import MainHeader from "./main-header";
import StateContext from "@/stateContext/StateContext";
import Notification from "../ui/notification";
import { useEffect } from "react";

export default function Layout(props){
    const { status, message, title, setStatus } = StateContext()

    useEffect(() => {
        if( status && (status === 'success' || status === 'error')){
            setTimeout(() => {
                setStatus(null)
            }, 3000);
        }
    })

    return (

        <Fragment>
            <MainHeader />
            <main>{props.children}</main>
            {status && <Notification title={title} message={message} status={status}/>}
        </Fragment>
    )
}