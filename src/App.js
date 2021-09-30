import {BrowserRouter,Route,Switch, useLocation} from 'react-router-dom'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Servizi from './Pages/Servizi';
import Menu from './Components/Menu'
import {AnimatePresence} from 'framer-motion'
import './App.css';
import Footer from './Components/Footer'
import Whatsapp from './Components/Whatsapp'
function App() {
const location=useLocation()

  return (
    <>

    <Menu />
    <Whatsapp />
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" component={Home} exact/>
        <Route path="/services" component={Servizi} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </AnimatePresence>
    <Footer />


</>
  );
}

export default App;
