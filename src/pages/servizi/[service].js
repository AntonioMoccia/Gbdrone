import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { createClient } from '../../prismicio'
import { PrismicRichText } from "@prismicio/react"
import { PrismicNextImage } from '@prismicio/next'
import NoSSR from '../../components/NoSSR'
import Image from 'next/image'

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

    useEffect(() => {
        console.log(data);
    }, [])

    return (

        <div className=' pt-4'>
            <div className='flex justify-center items-center'>
                <div className='relative md:w-[40%] w-[90%] h-[40vh]'>
                    <Image className=' rounded-md object-cover' fill src={data.img.url} />
                </div>

            </div>
            <div className='text-white md:px-10 px-5 mt-3 flex flex-col justify-between'>
                <NoSSR>
                    <PrismicRichText components={{
                        heading1:({children})=>(<h1 className=' text-2xl capitalize font-bold'>{children}</h1>),
                        paragraph:({children})=>(<p className=' text-md pt-3 hidden text-red-500'>{children}</p>)
                    }} field={data.titolo_servizio} />
                </NoSSR>
            <NoSSR>
                <PrismicRichText field={data.testo_servizio} />
            </NoSSR>
            </div>
        </div>
    )
}

export default Service