import React from 'react'
import {Container} from '../InCostruzione/styled'
import {Logo} from '../Menu/Styled'
import LogoNero from '../../img/LogoBianco.png'
function index() {

    return (
        <Container>
            <Logo to="/" > 
            <img src={LogoNero} />
            </Logo>
            <br />
            <br />
            <br />
                <h1>Sito in costruzione..</h1>
        </Container>
    )
}

export default index
