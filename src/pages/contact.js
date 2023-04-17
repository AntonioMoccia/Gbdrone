import React, { useEffect } from 'react'
import { createClient } from '../prismicio'
import Image from 'next/image'
import Card from '../components/Card'

export async function getServerSideProps(context) {
    const client = createClient()
    const contact = await client.getSingle('contact')

    return {
        props: {
            data: contact.data
        },
    }
}

function contact({ data }) {
    useEffect(() => {
        console.log(data);
    }, [data])
    return (
        <div className='text-white pt-4'>
            <div className='flex justify-center items-center'>
            <div className='relative lg:h-[50vh] lg:w-[50%] w-[90%] h-[40vh]'>
                    <Image className=' rounded-md object-cover' fill src={data.img_contact.url} />
                </div>
            </div>


            {/** FORM CONTATTI */}
            <div className='flex flex-col lg:flex-row gap-5 mt-10 '>
                <div className=' w-full lg:w-1/2 px-6 mt-2 h-52'>
                    <Card>
                        Card
                    </Card>
                </div>
                <div className=' w-full lg:w-1/2 px-6 mt-2 h-52'>
                    <Card>
                        <form className='flex flex-wrap gap-3 text-black' >
                                <input className='w-1/2' type='text' />
                                <input className='w-1/2' type='email' />
                                <textarea className='w-full' />
                        </form>
                    </Card>
                </div>
            </div>

        </div>
    )
}

export default contact

/*
  <form>
                    <input type='text' className='mt-3' />
                    <input type='text' className='mt-3' />
                    <input type='text' className='mt-3' />
                </form>
*/