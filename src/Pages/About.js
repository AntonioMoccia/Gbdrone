import React,{useEffect, useState} from "react";
import {Client,builder} from '../Client'
import AboutComponent from '../Components/About'
import {Animation,transition} from '../Animations'
import {motion} from 'framer-motion'
function About(){
const [risultato,setRisultato] = useState([])

    useEffect(()=>{

      const query = `*[_type == "AboutPage"]{
        _createdAt,
        _id,
        _rev,
        _type,
        _updatedAt,
           media[]{
                  _type,
               "url":asset->url
            },
        text,
        titolo
        }`

      Client.fetch(query).then(res=>{
        setRisultato(res)

      })
    },[])


return(
    <>
        <motion.div 
    initial='out' 
    animate='in'
    variants={Animation} 
    transition={transition}
    >
    <AboutComponent result={risultato} />
    </motion.div>
     </>
)
} 
export default About