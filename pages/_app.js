import '@/styles/globals.css'
import AppLayout from '@/components/Layout/AppLayout'
import 'animate.css';


export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  
  )
}
