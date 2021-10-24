import React,{useEffect,useState} from 'react'
import {BrowserRouter,Route,Switch, useLocation} from 'react-router-dom'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Servizi from './Pages/Servizi';
import Menu from './Components/Menu'
import {AnimatePresence} from 'framer-motion'
import './App.css';
import Footer from './Components/Footer'
import Whatsapp from './Components/Whatsapp'
import {Client} from './Client.js'
import InCostruzionePage from './Pages/InCostruzione'
function App() {
  const [InCostruzione,setInCostruzione] = useState(false)
const location=useLocation()
useEffect(()=>{
  const query=`*[_type == $type]{
    InCostruzione
  }`
const params={type: 'HomePage'}
Client.fetch(query,params).then(res=>{
       setInCostruzione(res[1].InCostruzione)
})
})
  return (
    <>

    {
      InCostruzione==false? (<Menu />):(null)
    }
    <Whatsapp />
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
      {
        InCostruzione==false? (
          <>
          <Route path="/" component={Home} exact/>
          <Route path="/services" component={Servizi} exact />
          <Route path="/contact" component={Contact} exact />
        </>
        ):(
          <Route path="/" component={InCostruzionePage} exact />
        )
      }
      

      </Switch>
    </AnimatePresence>
    <Footer />


</>
  );
}

export default App;
