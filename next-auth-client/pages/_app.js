import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css"
import Nav from "../components/Nav"
import firebase from '../firebase'
import { Provider } from "../context"


function MyApp({ Component, pageProps }) {
  return (
    <Provider>
    <Nav/>
    <Component {...pageProps} />
    </Provider>
  )
}



export default MyApp
