import React from 'react'

function Card({children}) {
  return (
    <div className='w-full flex justify-center items-center h-full rounded bg-[rgba(200,200,200,0.1)]'>
        {children}
    </div>    
  )
}

export default Card