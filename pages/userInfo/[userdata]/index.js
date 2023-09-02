import Link from "next/link";
import { data } from "..";
import { useRouter } from "next/router";    



const index = () => {
    const router = useRouter()
    // console.log(router.query.userdata)

    const data = {
        one : 'this is one',
        two : 'this is two'
    }

    return (
        <>
            <h1>welcome user</h1>
            <p><Link href={'.'}>back</Link></p>

            {data[router.query.userdata]}
        </>
    )
}

export default index;