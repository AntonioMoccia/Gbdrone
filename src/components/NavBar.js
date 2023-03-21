import Image from 'next/image'
import React from 'react'

function NavBar() {
    return (
        <div className=' bg-neutral-900 shadow shadow-gray-400 h-14 w-full'>
            <div className='w-72 h-4'>
                <Image src={'/ekd.png'} width={100}  height={100} />
            </div>
        </div>
    )
}

export default NavBar