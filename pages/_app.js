import '@/styles/globals.css'
import { ContextProvider } from '@/stateContext/StateContext'
import { Inter } from 'next/font/google'
import Layout from '@/Components/layout/layout'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </div>
  )
}
