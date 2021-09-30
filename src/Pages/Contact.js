import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import  Hero  from '../Components/Hero'
import Contacts from '../Components/Contacts'
import {motion} from 'framer-motion'
import {Animation,transition} from '../Animations'
import {Client,builder} from '../Client'

function Contact() {
    const [contact,setContact]=useState([])
    useEffect(()=>{
        const query=`*[_type == $type]`
        const params={type: 'ContactPage'}
        Client.fetch(query,params).then(res=>{
            setContact(res[0])
        })
    },[])

    return (
        <motion.div
        initial='out' 
        animate='in'
        variants={Animation} 
        transition={transition}
        >
            <Header>
                <Hero image={builder.image(contact.image).url()} text='Contattami' paddingTop='10%'/>
            </Header>
            <Contacts PI={contact.PI} number={contact.numeroTelefono} email={contact.email}/>
        </motion.div>
    )
}

export default Contact
