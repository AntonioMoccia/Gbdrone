import React, { useEffect } from 'react'
import { createClient } from '../prismicio'
import Image from 'next/image'
import Card from '../components/Card'
import TextField from '../components/TextField'
import TextAreaField from '../components/TextAreaField'

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