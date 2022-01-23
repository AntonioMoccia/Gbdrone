import styled from 'styled-components'

export const FooterContainer = styled.div`
    height:30vh;
    width:100vw;

    background-color:black;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
`;

export const Icon = styled.div`
    color:white;
    font-size:2.5vw;
    width:10%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    @media (max-width:868px){
        width:100%;
        font-size:7vw;
        justify-content:center;
    }
`
export const LinkSocial = styled.a`
    text-decoration: none;
    color:white;
    &:hover{
        color:white;
    }
    @media (max-width:868px){
        margin-right: 5%;
    }
`
