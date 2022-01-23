import React from 'react'
import Contacts from '../Components/Contacts'
import {motion} from 'framer-motion'
import {Animation,transition} from '../Animations'
import {useSelector} from 'react-redux'
function Contact() {

const contact = useSelector(state=>state.contact)   

return (
        <motion.div
        initial='out' 
        animate='in'
        variants={Animation} 
        transition={transition}
        >
{
          contact.loaded &&  <Contacts contact={contact.data}/>
}
          

        </motion.div>
    )
}

export default Contact
