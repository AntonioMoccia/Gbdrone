import React,{useEffect,useState} from 'react'
import {Route,Switch, useLocation} from 'react-router-dom'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Servizio from './Components/Services'
import Menu from './Components/Menu'
import {AnimatePresence} from 'framer-motion'
import './App.css';
import Footer from './Components/Footer'
import Whatsapp from './Components/Whatsapp'

import {client} from './prismic'

import About from './Pages/About';
import {isEmpty} from 'lodash'
import {useDispatch,useSelector} from 'react-redux'
import {getHomeData} from './redux/Home/homeSlice'
import { getContactData  } from "./redux/Contact/contactSlice";
import {getAboutData} from "./redux/About/aboutSlice"
import {getServicesData,getLabels} from './redux/Services/servicesSlice'
import './style/index.scss'

function App() {
  const [servizi,setServizi] = useState([])
  const location=useLocation()
  const dispatch = useDispatch()

  

  useEffect( async ()=>{ 

    dispatch(getHomeData())
    dispatch(getContactData())
    dispatch(getAboutData())
    var res = await client.getSingle('services')
    setServizi(res.data)     
  },[])

  return (
    <div className='wrapper-page'> 
<Whatsapp />
    {
      isEmpty(servizi) ? null : <Menu services={servizi} />
  }
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>  
        <Route path="/" component={Home} exact/>
        {
          isEmpty(servizi) ? null : servizi.body[0]?.items?.map(servizio=>(
               <Route key={servizio.servizio.id} path={`/${servizio.servizio.uid}`} component={Servizio} exact />    
             ))
        }
        <Route path="/contact" component={Contact} exact />
        <Route path="/about" component={About} exact />
     </Switch>

    </AnimatePresence>
    <Footer />
 

</div>
  );
}

export default App;
