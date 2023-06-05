import React, { useEffect } from 'react'
import Image from 'next/image'
import {createClient} from '../prismicio'
import RichText from '../components/RichText'
import Link from 'next/link'

export async function getServerSideProps(context) {
  const client = createClient()
  const about = await client.getSingle('about')

  return {
      props: {
          data: about.data
      },
  }
}


function ChiSono({data}) {
  useEffect(()=>{
    console.log(data);
  },[data])
  return (

    <div className=' md:pt-20 pt-4 pb-10'>
    <div className='flex justify-center items-center'>
        <div className='relative w-[25rem] h-[30rem]'>
            <Image className=' rounded-md object-cover' fill src={data.img_about.url} />
        </div>
    </div>

    <div className='text-white lg:px-[25%] leading-6 text-lg px-8 mt-16  flex flex-col justify-between pb-16'>
        <RichText field={data.testo_abut} />
    </div>
    <div className='lg:px-[25%] px-10 w-full pb-7'>
        <div className='uppercase text-sm bg-white text-black inline-block p-2 text-center rounded cursor-pointer lg:w-auto w-full '>
            <Link className='w-full' href={'/contact'}>Contattami</Link>
        </div>
    </div> 
</div>
  )
}

export default ChiSono