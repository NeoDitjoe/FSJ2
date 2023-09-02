import Link from "next/link";

const PageNotFound = () => {
    return (
        <>
            <h1>Page Not Found</h1>
            <Link href={'/'}>back</Link>
        </>
    )
}

// #endregion

export default PageNotFound;