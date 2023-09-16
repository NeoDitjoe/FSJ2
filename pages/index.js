import Head from 'next/head'
import NewsletterRegistration from '../components/input/newsletter-registration'
import {getFeaturedEvents} from '../helpers/api-util'
import EventList from '../components/event-list'

export default function HomePage(props){

    
    return(

        <div>

            <Head>

                <title>Next js</title>
                <meta
                    name='description'
                    content='Find a lot of great events that allow you to evolve...'
                
                />

            </Head>

            <NewsletterRegistration />


            <EventList item={props.events} />
            
        </div>
    )
}

export async function getStaticProps(){

    const featureEvents = await getFeaturedEvents()

    return{

        props: {
            events: featureEvents
        },
        revalidate: 1800
    }
}
