import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{Navigation, Parallax} from 'swiper'
import {FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft} from 'react-icons/fa'
import 'swiper/swiper.scss'
//import 'swiper/components/navigation/navigation.scss'
import './swiper.css'
import img1 from '../../img/1.jpeg'
//import img2 from '../../img/2.jpg'
//import img3 from '../../img/3.jpg'
import styled from 'styled-components'
import Hero from '../Hero'

SwiperCore.use([Navigation, Parallax])

const images=[
    img1
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
                        console.log(img)
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
