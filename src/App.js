import React,{useEffect,useState} from 'react'
import {BrowserRouter,Route,Switch, useLocation} from 'react-router-dom'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Servizi from './Pages/Servizi';
  import Servizio from './Components/Services'
import Menu from './Components/Menu'
import {AnimatePresence} from 'framer-motion'
import './App.css';
import Footer from './Components/Footer'
import Whatsapp from './Components/Whatsapp'
import {Client} from './Client.js'

import InCostruzionePage from './Pages/InCostruzione'
import About from './Pages/About';
function App() {
  const [InCostruzione,setInCostruzione] = useState(false)
  const [servizi,setServizi] = useState([])
const location=useLocation()
useEffect(()=>{ 
  console.log('Powered by Antonio Moccia')
  setInCostruzione(true)
       let params = {type: 'Services'}
       let query = `*[_type == $type]`
     Client.fetch(query,params).then(res=>{
       setServizi(res)

     })

    },[])

  return (
    <>

    {
      InCostruzione==true? (<Menu services={servizi}/>):(null)
    }
    <Whatsapp />
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
      {
        InCostruzione==true? (
          <>
          <Route path="/" component={Home} exact/>
          
          {
            servizi?.map(servizio=>(
              <Route key={servizio._id} path={`/${servizio.slug.current}`} component={Servizio} exact />    
            ))
          }
          <Route path="/contact" component={Contact} exact />
          <Route path="/about" component={About} exact />
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
