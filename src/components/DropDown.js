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
        <div ref={ref} className='inline-block relative top'>
            <button onClick={() => setOpenDrop(!openDrop)} className='text-xl md:text-sm cursor-pointer w-full px-0 py-1 uppercase justify-center items-center flex rounded '>
                {label}
                {openDrop ? <IoMdArrowDropup className=' ml-1' size={'15'} /> : <IoMdArrowDropdown className=' ml-1' size={'15'} />}
            </button>
            <div className={`shadow-md ring-1 ring-gray-200 py-2 origin-center translate-x-[-0%] relative md:absolute bg-black mt-1 md:w-auto w-[80vw] md:min-w-[8rem] rounded ${openDrop ? '' : 'hidden'}`}>
                <ul className='flex flex-col justify-center'>
                    {
                        links.map(({ label, href }) => (
                            <li className=' text-sm md:text-sm uppercase bg-black text-center py-1 cursor-pointer hover:bg-slate-900 text-white'><Link onClick={() => {
                                setOpenDrop(false)
                                onLinkClick()
                            }} href={href}>{label}</Link></li>
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