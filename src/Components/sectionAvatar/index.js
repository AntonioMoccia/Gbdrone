import React from 'react'
import './style.scss'

function Index({image}){

    return(
        
        <div className='avatar-home'>
            <div className='image'>
              <img src={image} />
            </div>
        </div>
        
    )
}
export default Index