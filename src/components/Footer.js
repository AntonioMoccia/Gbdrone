import React, { useEffect } from 'react'
import { BsInstagram, BsFacebook } from 'react-icons/bs'
import { createClient } from '../prismicio'
function Footer() {
    useEffect(() => {

    }, [])
    return (
        <div className='w-full flex justify-around flex-col items-center bg-black min-h-[8rem] '>
            <div className='w-full flex justify-around lg:justify-center items-center text-2xl px-24 '>
                <BsFacebook color='white' />
                <BsInstagram color='white' className=' ml-5' />
            </div>
          
        </div>
    )
}

export default Footer