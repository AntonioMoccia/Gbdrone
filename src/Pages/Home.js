import React,{useEffect,useState} from 'react'
import Swipe from '../Components/Swiper'
import SectionHome from '../Components/SectionHome'
import SectionVideoHome from '../Components/SectionVideoHome'
import {motion} from 'framer-motion'
import { Animation, transition } from '../Animations'
import styled from 'styled-components'
import Hero from '../Components/Hero'
import BlockContent from '@sanity/block-content-to-react'
import imageHome from '../img/1.jpeg'

import {Client} from '../Client'
const Wrapper = styled.div`
    overflow-x:hidden;
`
const serialize={
    marks: {
        color: props => <span style={{color:props.mark.hex}}>{props.children}</span>
    }
}
function Home() {
    const [response,setResponse] = useState([])
    useEffect(()=>{
        const query=`*[_type == $type]{
            ButtonText,
            Frase,
            HeroText,
              'Video':Video.asset->url,
            h1,
            'Image':image.asset->url,
            parallax
          }`
        const params={type: 'HomePage'}
        Client.fetch(query,params).then(res=>{
           setResponse(res[0])
        })
    },[])

    return (
        <Wrapper>
          
        <motion.div 
        initial='out' 
        animate='in'
        variants={Animation} 
        transition={transition}
        >
            <div style={{
                height:'100vh'
            }}>
        <Hero 
        image={response.Image} 
        text={<BlockContent blocks={response.HeroText} serializers={serialize}/>} 
        buttonText={response.ButtonText}
         paddingTop='40vh'
         parallaxActive={response.parallax}
        />
        </div>
            <SectionHome frase={response.Frase} h1={response.h1} />
            <SectionVideoHome url={response.Video} />
        </motion.div>
        </Wrapper>
    )
}

export default Home
