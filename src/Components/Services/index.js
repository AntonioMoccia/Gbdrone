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

function Index() {
const location = useLocation()
const [risultato,setRisultato] = useState({})
useEffect(()=>{
  
    let query = `*[_type=='Services' && slug.current==$slug]{
        _createdAt,
        _id,
        _rev,
        _type,
        _updatedAt,
        body,
        gallery{
          media[]{
               "url":asset->url,
            _type
          }
        },
        media[]{
                _type,
          "url":asset->url
        },
        slug,
        title
        }`
    let parametri={slug:location.pathname.replace('/','')}
        Client.fetch(query,parametri).then(result=>{
       
            setRisultato(result[0])
            if(result[0]?.gallery?.media?.length<1 || result[0].gallery == undefined ){
                document.querySelector('.swiper-wrapper-container').style.display='none'
                document.querySelector('.buttons-swiper').style.display='none'
            }
        })  
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
        <div className='servizio-wrapper'>
            <div className='image-services'>

            {
                risultato?.media?.map(media=>(
                        <>
                        {
                            media._type=='image'?(
                           <img src={media.url} />     
                            ):(
                                <video>
                                    <source src={media.url} />
                                </video>
                            )
                        }
                        </>
                ))
            }
            
            </div>
{            /*<h1 className='title-services'>
                {risultato.title}
        </h1>*/}
            <div className='wrapper-frase'>
            <BlockContent blocks={risultato.body} serializers={serialize}/>
            </div>
            <br></br>

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

        </div>
                    </motion.div>
    )

}

export default Index
/*


*/