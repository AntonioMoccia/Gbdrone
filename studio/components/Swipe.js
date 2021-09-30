import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{ Navigation,Pagination} from 'swiper'
import 'swiper/swiper.css';
import 'swiper/components/navigation/navigation.css'




SwiperCore.use([Navigation,Pagination])

function Swipe({files}) {
 


    return (
<Swiper style={{
    height:'100%',
    width:'100%'}}
        navigation
    >

        {
            files.map(file=>{

                if(file._type=='image'){
                        return(
                            <SwiperSlide style={{
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                overflow:'hidden'
                            }}>
                                <div style={{
                                    height:'100%',
                                    width:'100%',
                                    display:'flex',
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}>
                                    <img src={file.url} style={{
                                        maxWidth:'100%'
                                    }} />
                                    </div>
            
                            </SwiperSlide>            
                            )                    
                }else{
                    <SwiperSlide style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        overflow:'hidden'
                    }}>
                        <div style={{
                            height:'100%',
                            width:'100%',
                            display:'flex',
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <video>
                                <source src={file.url} />
                            </video>
                            </div>
    
                    </SwiperSlide>
    
                }
            })
        }
    
</Swiper>
    )
}

export default Swipe
