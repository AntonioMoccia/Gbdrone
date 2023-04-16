import React,{useEffect} from 'react'
import { useRouter } from 'next/router'
import {createClient} from '../prismicio'
import {PrismicRichText} from "@prismicio/react"
export async function getServerSideProps(context) {
    const client = createClient()
    const servizio = await client.getByUID('servizio',context.query.service)

    return {
      props: {
          data:servizio.data
      }, // will be passed to the page component as props
    }
}

const Service = ({data})=>{

    useEffect(()=>{
        console.log(data.titolo_servizio);
    },[data])

    return (

            <h1>
                <PrismicRichText field={data.titolo_servizio} />
            </h1>
    )
}

export default Service