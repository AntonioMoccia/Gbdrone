import React,{useState,useEffect} from 'react'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import {WhatsappWrapper} from './styled'
import {Client} from '../../Client'
import { client } from '../../prismic'

const Whatsapp = ()=>{

        const [contact,setContact]=useState([])
        useEffect(async()=>{
            var res = await client.getSingle('contact')
            setContact(res.data)
        },[])
    return(
        <WhatsappWrapper>
        <WhatsAppWidget textReplyTime='' phoneNumber = {`+39 ${contact.tel}`} placeholder='Inserisci il messaggio' companyName='GBdrone' message='Ciao! 👋🏼  Come posso aiutarti?' sendButton='Invia'/>
        </WhatsappWrapper>
    )
}

export default Whatsapp