import React from 'react'
import {FaWhatsapp,FaMailBulk,FaPhone, FaMobile} from 'react-icons/fa'
import {ContactWrapper, SingleContact, Mail,Map} from './styled'

function index({number,email,PI}) {

    return (
        <div>
            <ContactWrapper>
                <SingleContact>
                    <FaMobile />
                  {number}
                </SingleContact>
                <SingleContact>
               <FaMailBulk />
               <Mail href={`mailto:${email}`} >
              {email}
            </Mail>
                </SingleContact>
                <SingleContact>
                    <h1 style={{
                        fontSize:'3vw',
                        marginRight:'10%'
                    }}>PI</h1>
                  {PI}
                </SingleContact>
            </ContactWrapper>
        <Map>

        </Map>
        </div>
    )
}

export default index
