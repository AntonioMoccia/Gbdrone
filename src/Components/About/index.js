import React,{useEffect} from 'react'
import BlockContent from '@sanity/block-content-to-react'
import './style.scss'

const serialize={
    marks: {
        color: props => <span style={{color:props.mark.hex}}>{props.children}</span>
    }
}


function AboutComponent({result}){

    return(
        <div className='wrapper-about'>
            <div className='media-about'>
                {
                            result[0]?.media[0]?._type=='image'?(
                                <img src={result[0]?.media[0]?.url} />     
                                 ):(
                                     <video controls='false'>
                                         <source src={result[0]?.media[0]?.url} />
                                     </video>
                                 )
                }
            </div>
            <div className='text-about'>
                <BlockContent blocks={result[0]?.text} serializers={serialize} />
            </div>
        </div>
    )
}


export default AboutComponent