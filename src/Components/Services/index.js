import React,{useEffect,useState} from 'react'

import {builder, Client} from '../../Client'
import {useLocation} from 'react-router-dom'
import SwiperCore,{Navigation,Pagination} from 'swiper'

import { Swiper, SwiperSlide } from "swiper/react";
import BlockContent from '@sanity/block-content-to-react'
import {FiArrowRightCircle,FiArrowLeftCircle} from 'react-icons/fi'
import {Animation,transition} from '../../Animations'
import {motion} from 'framer-motion'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './Styled.scss'
import { client } from '../../prismic';
import {PrismicRichText} from '@prismicio/react'
import {isEmpty} from 'lodash'
function Index() {
const location = useLocation()
const [risultato,setRisultato] = useState({})
useEffect( async ()=>{
    var uid = location.pathname.replace('/','')
    var res = await client.getByUID('servizio',uid)
  setRisultato(res.data)
},[location.pathname])
const serialize={
    marks: {
        color: props => <span style={{color:props.mark.hex}}>{props.children}</span>
    }
}



    SwiperCore.use([Navigation,Pagination])
    return (
  
        <motion.div
        initial='out' 
        animate='in'
        variants={Animation} 
        transition={transition}
        >    
        {
            isEmpty(risultato) ? null : (
                <div className='servizio-wrapper'>
                <div className='image-services'>
                    <img src={risultato.img.url} />     
                </div>
                <div className='wrapper-frase'>
                      <PrismicRichText field={risultato.testo_servizio} />
                </div>
            </div>
            )
        }

                    </motion.div>
    )

}

export default Index
/*
 <div className='swiper-wrapper-container' onDoubleClick={(e)=>{
            e.preventDefault()
        }} >
            <Swiper
            speed={200}
            navigation={
                {
                    nextEl:'.buttons-swiper > .next-button',
                    prevEl:'.buttons-swiper > .prev-button'
                }
            } pagination loop>

                    {
                        risultato?.gallery?.media?.map(image=>(
                            <>
                            {
                               image._type=='image'?(
                                <SwiperSlide key={image._key} >
                                <img src={image.url} />
                            </SwiperSlide>
                               ):(
                                <SwiperSlide key={image._key} >
                               <video>
                                   <source src={image.url} />
                               </video>
                            </SwiperSlide>
                               ) 
                            }
                            </>
                        ))
                    }
            </Swiper>
        </div>
        <div className='buttons-swiper' >
                    <FiArrowLeftCircle className='prev-button' />
                    <FiArrowRightCircle className='next-button' />
            </div>

*/