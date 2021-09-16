import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css"
import Nav from "../components/Nav"
import firebase from '../firebase'


function MyApp({ Component, pageProps }) {
  return <>
    <Nav/>
    <Component {...pageProps} />
  </>
}



export default MyApp
