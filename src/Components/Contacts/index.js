import React from 'react'
import {FaMailBulk, FaMobile} from 'react-icons/fa'
import {ContactWrapper, SingleContact, Mail} from './styled'
import Form from '../contactForm'

import './style.scss'
function Index({contact}) {

    return (
        <div className='contact-wrapper'>
                    <div className='image-contact'>
                    <img src={contact.img_contact.url} />     
                </div>
                <ContactWrapper>
                    <SingleContact>
                        <FaMobile />
                      {contact?.tel}
                    </SingleContact>
                    <SingleContact>
                   <FaMailBulk />
                   <Mail href={`mailto:${contact?.email}`} >
                  {contact?.email}
                </Mail>
                    </SingleContact>
                    <SingleContact>
                        <h1 className='partita-iva'>P.I.</h1>
                      {contact?.partita_iva}
                    </SingleContact>
                </ContactWrapper>
                <div className='form-wrapper'>
                    <div className='form-title'>
                        Contattami!
                    </div>
                        <Form />
                </div>
            

        </div>
    )
}

export default Index
