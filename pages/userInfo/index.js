import Link from "next/link";
import { useEffect } from "react";

export const data = [
    { id: 'one', name: 'name1', surname: "surname1"},
    { id: 'two', name: 'name2', surname: "surname2"}
  ]


const index = () => {

    return (
        <>
            <h1>user data</h1>
            <Link href={'/'}>back</Link>
            {
                data.map((s) => {
                    return <ul><li><Link key={s.id} href={`/userInfo/${s.id}`}>{s.name}</Link></li></ul>
                })
            }
        </>
    )
}


export default index;