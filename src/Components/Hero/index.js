import React from 'react'
import {
    Hero,
    HeroButton,
    TextHero
} from './styled'
import useScroll from '../../hooks/useScroll'
import {useLocation, useHistory} from 'react-router-dom'
function Index({image, text, buttonText, paddingTop, parallaxActive}) {
      const {scrollY,Mobile} = useScroll()
        const history=useHistory()
      return (

        <Hero image={image} paddingTop={paddingTop} Mobile={Mobile}  parallax={scrollY} parallaxActive={parallaxActive}>
            <TextHero  parallax={scrollY}>{text}</TextHero>
     
       {
           buttonText? (
            <HeroButton onClick={()=>{console.log(history.push('/services'))}}>
                {buttonText}
             </HeroButton>
           ):(null)
       }

        </Hero>

    )
}

export default Index
