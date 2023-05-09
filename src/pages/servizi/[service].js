import React from 'react'
import { createClient } from '../../prismicio'
import Image from 'next/image'
import RichText from '../../components/RichText'
import Link from 'next/link'

export async function getServerSideProps(context) {
    const client = createClient()
    const servizio = await client.getByUID('servizio', context.query.service)

    return {
        props: {
            data: servizio.data
        },
    }
}

const Service = ({ data }) => {

    return (

        <div className=' md:pt-20 pt-4 pb-10'>
            <div className='flex justify-center items-center'>
                <div className='relative lg:h-[50vh] lg:w-[50%] w-[90%] h-[40vh]'>
                    <Image className=' rounded-md object-cover' fill src={data.img.url} />
                </div>
            </div>
            <div className='text-white lg:px-[25%] leading-6 text-lg px-8 mt-16  flex flex-col justify-between pb-16'>
                <RichText field={data.titolo_servizio} />
                <RichText field={data.testo_servizio} />
            </div>
            <div className='lg:px-[25%] px-10 w-full pb-7'>
                <div className='uppercase text-sm bg-white text-black inline-block p-2 text-center rounded cursor-pointer lg:w-auto w-full '>
                    <Link className='w-full' href={'/contact'}>Contattami</Link>
                </div>
            </div>
        </div>
    )
}

export default Service