import React,{useState,useEffect} from 'react'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import {WhatsappWrapper} from './styled'
import {Client} from '../../Client'

const Whatsapp = ()=>{

        const [contact,setContact]=useState([])
        useEffect(()=>{
            const query=`*[_type == $type]`
            const params={type: 'ContactPage'}
            Client.fetch(query,params).then(res=>{
                setContact(res[0])
            })
        },[])
    return(
        <WhatsappWrapper>
        <WhatsAppWidget textReplyTime='' phoneNumber = {`+39 ${contact.numeroTelefono}`} placeholder='Inserisci il messaggio' companyName='Gbdrone' message='Ciao! 👋🏼  Come posso aiutarti?' sendButton='Invia'/>
        </WhatsappWrapper>
    )
}

export default Whatsapp