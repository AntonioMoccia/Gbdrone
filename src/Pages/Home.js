import React,{useEffect,useState} from 'react'
import Swipe from '../Components/Swiper'
import SectionHome from '../Components/SectionHome'
import SectionVideoHome from '../Components/SectionVideoHome'
import {motion} from 'framer-motion'
import { Animation, transition } from '../Animations'
import styled from 'styled-components'
import Hero from '../Components/Hero'
import Avatar from '../Components/sectionAvatar'

import BlockContent from '@sanity/block-content-to-react'
import {Client} from '../Client'

const Wrapper = styled.div`
    overflow-x:hidden;
    background-color:black;
    color:white;

`
const serialize={
    marks: {
        color: props => <span style={{color:props.mark.hex}}>{props.children}</span>
    }
}
function Home() {
    const [response,setResponse] = useState([])

    useEffect(async()=>{
        let query=`*[_type == $type]{
            Frase,
            InCostruzione,
            Video{
                _type,
              "url":asset->url
            },
            _createdAt,
            _id,
            _rev,
            _type,
            _updatedAt,
            avatar{
              _type,
              "url":asset->url
            },
            h1,
            media[]{
             _type,
            "url":asset->url
             },
            parallax
            }`
        let params={type: 'HomePage'}
        await Client.fetch(query,params).then(res=>{
     
           setResponse(res[0])
        })
},[])

    return (
   response && (

    <Wrapper>
          
    <motion.div 
    initial='out' 
    animate='in'
    variants={Animation} 
    transition={transition}
    >

    <Hero 
        media={response.media} 
        text={<BlockContent blocks={response.HeroText} serializers={serialize}/>} 
        buttonText={response.ButtonText}
        parallaxActive={response.parallax}
    />
        <Avatar image={response?.avatar?.url} />
            {/*<SectionVideoHome url={response.Video?.url} />*/}
        <SectionHome frase={<BlockContent blocks={response.Frase} serializers={serialize} />} />
    </motion.div>
    </Wrapper>

   )
    )
}

export default Home
