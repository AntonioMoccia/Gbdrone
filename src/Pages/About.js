import React from "react";
import AboutComponent from '../Components/About'
import {Animation,transition} from '../Animations'
import {motion} from 'framer-motion'
import {useSelector} from 'react-redux'
function About(){

  const about = useSelector(state=>state.about)

return(
    <>
        <motion.div 
          initial='out' 
          animate='in'
          variants={Animation} 
          transition={transition}
          >
          
{
 about.loaded && <AboutComponent result={about.data} />

}
    </motion.div>
     </>
)
} 
export default About