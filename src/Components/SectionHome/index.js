
import React from 'react'

import {
    SectionHome
} from './styled'

function index({frase,h1}) {
    return (
<SectionHome>
    <h1>{h1}</h1>
    <p>{frase}</p>
</SectionHome>
    )
}

export default index
