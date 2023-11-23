import '@/styles/bootstrap.min.css';
import '@/styles/custom.css';

export default function App({ Component, pageProps }) {
  return(
    <>
    <Component {...pageProps} />
    </>
  )
}