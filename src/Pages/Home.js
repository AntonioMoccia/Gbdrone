import React,{useEffect,useState} from 'react'
import Swipe from '../Components/Swiper'
import SectionHome from '../Components/SectionHome'
import {useSelector} from 'react-redux'
import {motion} from 'framer-motion'
import { Animation, transition } from '../Animations'
import styled from 'styled-components'
import Hero from '../Components/Hero'
import Avatar from '../Components/sectionAvatar'

import {isEmpty} from 'lodash'
const Wrapper = styled.div`
    overflow-x:hidden;
    background-color:black;
    color:white;
`

function Home() {
    const [response,setResponse] = useState([])
    const [data,setdata] = useState({})
    const home = useSelector(state=>state.home)

    return (
    home.loaded && (<div className='wrapper-home'>
            <div>
                    <Hero 
                        media={home.data.video.url} 
                        text={''} 
                        buttonText={''}
                        parallaxActive={false}
                    />
                        <Avatar image={home.data.avatar.url} />
                            {/*<SectionVideoHome url={response.Video?.url} />*/}
                        <SectionHome frase={home.data.frase} />
            </div>
    </div>)

   )

}

export default Home
