import React, { useEffect } from 'react'
import { createClient } from '../prismicio'
import Image from 'next/image'
import Card from '../components/Card'
import TextField from '../components/TextField'
import TextAreaField from '../components/TextAreaField'
import { BsPhoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
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
            <div className="mt-10 md:w-[70vw] md:ml-[15vw] grid md:px-3 px-3 grid-cols-1">

                <div className=' md:px-14 p-4'>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-1 md:gap-8'>
                        <div className=' flex flex-col '>
                            <label htmlFor='name' className=' text-base'>Full name</label>
                            <input type='text' id='name' name='form_name' className=' text-black h-10 rounded' />
                        </div>
                        <div className=' flex flex-col '>
                            <label htmlFor='email' name='form_email' className=' text-base'>Email</label>
                            <input type='email' className=' text-black h-10 rounded' />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 mt-2 gap-1'>
                        <label htmlFor='message'>Message</label>
                        <textarea id='message' className=' text-black h-full min-h-[10rem] rounded' />
                    </div>
                    <div className='grid grid-cols-1 mt-6'>
                        <button className='w-full bg-white text-black uppercase rounded p-2'>
                            Invia
                        </button>
                    </div>
                </div>


{/*                 
                <div className=' w-full mt-10 flex flex-col lg:flex-row justify-center items-center'>
                    <div className=' bg-red-300 p-50% w-full flex items-center justify-start mb-6 text-xl '>
                        <BsPhoneFill color='white' className='mr-2' />
                        {data.tel}
                    </div>
                    <div className='flex w-52 items-center  justify-start mb-6 text-xl '>
                        <AiOutlineMail color='white' className='mr-1  min-w-10' />
                        {data.email}
                    </div>
                    <div className='flex w-52 items-center justify-start mb-6 text-xl '>
                        <span className='mr-2'>
                            P.I.
                        </span>
                        {data.partita_iva}
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default contact

/*
                <div className='flex flex-col lg:flex-row w-full lg:min-h-auto min-h-[18rem] md:min-h-0 mb-3 justify-around lg:px-4 py-5 px-[25%] text-2xl items-start  '>

<form>
                    <input type='text' className='mt-3' />
                    <input type='text' className='mt-3' />
                    <input type='text' className='mt-3' />
                </form>
*/