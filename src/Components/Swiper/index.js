import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{Navigation, Parallax} from 'swiper'
import {FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft} from 'react-icons/fa'
import 'swiper/swiper.scss'
//import 'swiper/components/navigation/navigation.scss'
import './swiper.css'

import styled from 'styled-components'
import Hero from '../Hero'

SwiperCore.use([Navigation, Parallax])

const images=[
    
]


function index() {

    return (
        <div className='first-wrapper-container'>
        <div className="swiper">
            
            <Swiper 
              navigation={{
                  nextEl:'.swiper-button-next',
                  prevEl:'.swiper-button-prev',
              }}
   
              loop
              parallax
              >

                {
                    images.map((img,index)=>{
                     
                        return(

                                <SwiperSlide key={index} style={{
                                    height:'100vh',
                                }}>
                                    <Hero image={img}/>
                                </SwiperSlide>

    
                        )
                    })
                }

            </Swiper>
 
         </div>
         </div>
    )
}

export default index
