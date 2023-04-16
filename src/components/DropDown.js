import React, { useEffect, useRef, useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'

import Link from 'next/link'

function DropDown({ label, links, onLinkClick = () => { } }) {
    const [openDrop, setOpenDrop] = useState(false)
    const ref = useRef(null)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpenDrop(false)
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <div ref={ref} className='relative'>
            <button onClick={() => setOpenDrop(!openDrop)} className='text-md cursor-pointer w-full px-0 py-1 uppercase justify-start items-center flex  '>
                {label}
                {openDrop ? <IoMdArrowDropup className=' ml-1' size={'18'} /> : <IoMdArrowDropdown className=' ml-1' size={'18'} />}
            </button>
            <div className={`shadow-md py-3 origin-center relative md:absolute bg-white mt-3 md:w-auto w-full md:min-w-[8rem] rounded ${openDrop ? '' : 'hidden'}`}>
                <ul className='flex flex-col items-start px-4 justify-start space-y-2'>
                    {
                        links.map(({ label, href }) => (
                            <li className=' capitalize text-md md:text-sm text-center py-1 cursor-pointer text-black'><Link onClick={() => {
                                setOpenDrop(false)
                                onLinkClick()
                            }} href={`/servizi/${href}`}>{` ${label}`}</Link></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default DropDown

/**
 * absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none
 */