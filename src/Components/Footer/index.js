import React,{useEffect,useState} from 'react'
import {FooterContainer, Icon, LinkSocial} from './styled'
import {FaInstagram, FaFacebook, FaWhatsapp} from 'react-icons/fa'
import {Client} from '../../Client'
function Index() {
    const [contact,setContact]=useState([])
    useEffect(()=>{
        const query=`*[_type == $type]`
        const params={type: 'ContactPage'}
        Client.fetch(query,params).then(res=>{
            setContact(res[0])
        })
    },[])
    return (
        <FooterContainer>
            <Icon>
        <LinkSocial href={contact.Instagram}>
            <FaInstagram />
            </LinkSocial>
            <LinkSocial href={contact.Facebook}>
            <FaFacebook />
            </LinkSocial>
            </Icon>
        </FooterContainer>
    )
}

export default Index
