import '@/styles/globals.css'
import { ContextProvider } from '@/stateContext/StateContext'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </div>
  )
}
