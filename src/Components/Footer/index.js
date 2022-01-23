import React from 'react'
import {FooterContainer, Icon, LinkSocial} from './styled'
import {FaInstagram, FaFacebook} from 'react-icons/fa'
import {useSelector} from 'react-redux'
function Index() {
    const social = useSelector(state=>state.contact)

    return (
        <>
        {
            social.loaded && (
                <FooterContainer>
                    <Icon>
                        <LinkSocial href={social.data.instagram.url}>
                            <FaInstagram />
                        </LinkSocial>
                        <LinkSocial href={social.data.facebook.url}>
                            <FaFacebook />
                        </LinkSocial>
                    </Icon>
                </FooterContainer>
            )
        }
        </>
    )
}

export default Index
