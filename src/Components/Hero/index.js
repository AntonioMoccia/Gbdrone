import React,{useEffect,useState} from 'react'
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
        const [infImage,setInfImage] = useState({})

          useEffect(async()=>{
          const img = new Image()
          img.src=image
    
          img.onload=(img)=>{

              const obj={
                height: img.path[0].height,
                width:  img.path[0].width
              }
              setInfImage(obj)
          }
        },[])

        useEffect(()=>{
            const hero = document.querySelector('#hero');
            hero.style.backgroundPositionY=`${scrollY/2.5}px`;
            if(Mobile){
              hero.style.backgroundSize=`150% 150%`;
            }else{
              hero.style.backgroundSize=`cover`;
            }
              


        },[scrollY])

      return (

        <Hero id="hero" image={image} paddingTop={paddingTop} Mobile={Mobile}  parallax={scrollY} parallaxActive={parallaxActive}>
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
