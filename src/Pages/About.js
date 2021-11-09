import React,{useEffect, useState} from "react";
import {Client,builder} from '../Client'
import AboutComponent from '../Components/About'

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
    <AboutComponent result={risultato} />
    </>
)
} 
export default About