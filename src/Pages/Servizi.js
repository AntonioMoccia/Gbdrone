import React,{useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import { Animation, transition } from '../Animations'
import Header from '../Components/Header'
import ServicesImage from '../img/services.jpg'
import Hero from '../Components/Hero'
import HeroService from '../Components/HeroService'
import BlockContent from '@sanity/block-content-to-react'
import {Client,builder} from '../Client'
import Service from '../Components/Services'
function Servizi() {
    const [Services,setServices]=useState([])
    const serialize={
        marks: {
            color: props => <span style={{color:props.mark.hex}}>{props.children}</span>
        }
    }
      //props.mark.hex
    useEffect(()=>{
        const query=`*[_type == $type]`
        const params={type: 'Services'}
        Client.fetch(query,params).then(res=>{
       

            setServices(res)
        })
    
    },[])

    return (
       <motion.div
       initial='out' 
       animate='in'
       variants={Animation} 
       transition={transition}
       >    
{
    Services.length>0 && Services.map(serv=>(
        <Service servizio={serv} />
    ))
}
        </motion.div>
    )
}

export default Servizi
/*
{       <Header>
           <Hero image={builder.image(Services.image).url()} text='Servizi' paddingTop='20vh' parallaxActive={false} />
        </Header>
        <>
        {
          Services.Services &&  Services.Services.map((Service,i)=>{
                return(
                    <HeroService 
                    key={i}
                    title={Service.title}
                    text={<BlockContent blocks={Service.body} serializers={serialize}/>}
                    image={builder.image(Service.Image).url()}
                    />
                )
            })
        }
        </>
}

*/