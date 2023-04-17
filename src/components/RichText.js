import React from 'react'
import NoSSR from './NoSSR'
import { PrismicRichText } from "@prismicio/react"



function RichText({field}) {
    return (
        <NoSSR>
            <PrismicRichText components={{
                heading1: ({ children }) => (<h1 className=' text-3xl max-w-full break-words capitalize font-bold'>{children}</h1>),
                paragraph: ({ children }) => (<p className=' text-md pt-2  text-white'>{children}</p>),
                heading3: ({ children }) => (<h3 className=' text-xl pt-5  text-white'>{children}</h3>)
            }} field={field} />
        </NoSSR>
    )
}

export default RichText