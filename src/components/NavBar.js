import React, { useEffect, useState } from 'react'
import DropDown from './DropDown'
import { BiMenuAltLeft } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { createClient } from '../prismicio.js'
import Link from 'next/link'

const getServices=async()=>{
  const client = createClient()
    const servizi = await client.getSingle('services')
    return servizi
  }

function NavBar() {
  const [open, setOpen] = useState(false)
  const [links, setLinks] = useState([])
  const router = useRouter()

  useEffect(() => {
    getServices().then(response=>{
      //console.log(response.data.body[0].items);
      const tempArray = response.data.body[0].items.map(item=>{
        console.log();
        return {
          label:item.servizio.slug,
          href:`/${item.servizio.uid}`
        }
      })
      setLinks(tempArray)
    })

  }, [])

  return (
    <nav className='fixed z-50 w-full h-24 bg-[rgb(24,24,24)] text-white'>
      <div className='flex justify-between  px-6 h-24'>

        <div onClick={() => router.push('/')} className=' p-3 h-24 w-20 flex items-center justify-center z-10'>
          <Image src={'/LogoBianco.png'} layout='responsive' width={'100'} height={'100'} />
        </div>

        <div className={`ease-in-out duration-150 bg-[rgb(24,24,24)] lg:h-24 lg:w-auto h-screen lg:relative absolute w-screen lg:left-0 ${open ? 'left-0' : 'left-[-100%]'}`}>
          <ul className='block text-left my-auto lg:flex flex-col lg:flex-row px-9 py-2  lg:space-y-0 lg:space-x-6 space-y-7 lg:mt-0 mt-28 lg:h-full justify-center lg:justify-start items-center'>
            <li className=' text-md w-full lg:w-auto'>
            <Link className="w-full" onClick={() => {
                                setOpen(false)
                            }} href={'/'}>Home</Link>
            </li>
            <li className=' text-md w-full lg:w-auto'>
            <Link onClick={() => {
                                setOpen(false)
                            }} href={'/chi-sono'}>Chi sono</Link>
            </li>

              <DropDown
                onLinkClick={() => setOpen(false)}
                label={'Servizi'} links={links} />

            <li className='uppercase text-sm bg-white text-black inline-block p-2  text-center rounded cursor-pointer lg:w-auto w-full '>
            <Link onClick={() => {
                               setOpen(false)
                            }} href={'/contact'}>Contattami</Link>
            </li>
          </ul>
        </div>
        <div onClick={() => setOpen(!open)} className='z-10 h-24 cursor-pointer flex justify-center items-center lg:hidden'>
          <BiMenuAltLeft color='white' size='25' />
        </div>
      </div>
    </nav>
  )
}

export default NavBar