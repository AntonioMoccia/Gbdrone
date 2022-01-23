import React from 'react'

import {PrismicRichText} from '@prismicio/react'

import './style.scss'

function AboutComponent({result}){

    return(
        <div className='wrapper-about'>
                    <div className='media-about'>
                        <img src={result.img_about.url} />  
                    </div>
                    <div className='text-about'>
                        <PrismicRichText field={result.testo_abut} />
                    </div>
        </div>
    )
}


export default AboutComponent