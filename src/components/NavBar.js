import React, { useEffect, useState } from 'react'
import DropDown from './DropDown'
import { AiOutlineMenu } from 'react-icons/ai'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { createClient } from '../prismicio.js'


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
    <nav className='fixed w-full h-20 bg-black text-white'>
      <div className='flex justify-between  px-6 h-20'>

        <div onClick={() => router.push('/')} className=' p-3 h-20 w-20 flex items-center justify-center z-10'>
          <Image src={'/LogoBianco.png'} layout='responsive' width={'100'} height={'100'} />
        </div>

        <div className={`ease-in-out duration-150 bg-black md:h-20 md:w-auto h-screen md:relative absolute w-screen md:left-0 ${open ? 'left-0' : 'left-[-100%]'}`}>
          <ul className='block text-center my-auto md:flex flex-col md:flex-row space-x-2 md:space-y-0 space-y-2 md:mt-0 mt-[30vh] md:h-full justify-center md:justify-start items-center'>
            <li className='uppercase md:text-sm text-xl'>Home</li>
            <li className='uppercase md:text-sm text-xl'>Chi sono</li>
            <li>
              <DropDown
                onLinkClick={() => setOpen(false)}
                label={'Servizi'} links={links} />
            </li>
            <li className='uppercase md:text-sm text-xl'>Contattami</li>
          </ul>
        </div>
        <div onClick={() => setOpen(!open)} className='z-10 h-20 flex justify-center items-center md:hidden'>
          <AiOutlineMenu color='white' />
        </div>
      </div>
    </nav>
  )
}

export default NavBar