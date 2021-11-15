import React,{useEffect} from 'react'
import {FaWhatsapp,FaMailBulk,FaPhone, FaMobile} from 'react-icons/fa'
import {ContactWrapper, SingleContact, Mail,Map} from './styled'
import Form from '../contactForm'
import './style.scss'
function Index({contact}) {

    return (
        <div className='contact-wrapper'>

<div className='image-contact'>

{
    contact?.media?.map(media=>(
            <>
            {
                media._type=='image'?(
               <img src={media.url} />     
                ):(
                    <video>
                        <source src={media.url} />
                    </video>
                )
            }
            </>
    ))
}

</div>


            <ContactWrapper>
                <SingleContact>
                    <FaMobile />
                  {contact?.numeroTelefono}
                </SingleContact>
                <SingleContact>
               <FaMailBulk />
               <Mail href={`mailto:${contact?.email}`} >
              {contact?.email}
            </Mail>
                </SingleContact>
                <SingleContact>
                    <h1 style={{
                        fontSize:'6vw',
                        marginRight:'10%'
                    }}>P.I.</h1>
                  {contact?.PI}
                </SingleContact>
            </ContactWrapper>
            <div className='form-wrapper'>
                <div className='form-title'>
                    Contattaci!
                </div>
                    <Form />
            </div>


        <Map>

        </Map>
                  

        </div>
    )
}

export default Index
