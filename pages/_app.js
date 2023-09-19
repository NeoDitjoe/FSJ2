import Head from 'next/head'
import '../styles/globals.css'
import Layout from '../components/layout/layout'
import Notification from '@/components/ui/notification'
import { ContextProvider } from '@/stateContext/StateContext'

function MyApp({ Component, pageProps }) {
  return (

    <ContextProvider>
      <Layout>
      <Head>
        <title>Next Events</title>
        <meta name='description' content='NextJS events' />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        />
      </Head>

        <Component {...pageProps} />
      </Layout>
    </ContextProvider>

)}

export default MyApp
