import styled from 'styled-components'

export const ContactWrapper = styled.div`
    height:auto;
    width: 100vw;
    background-color: black;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0%;
    padding-bottom: 10%;
    flex-direction: column;
`
export const SingleContact=styled.div`
        height:10vh;
        min-height:10vh;
        margin-top:5%;
        width: 80%;
        background-color: black;
        display: flex;
        justify-content:flex-start;
        padding-left: 10%;
        align-items: center;
        color:white;
        font-size:3vw;
        svg{
            margin-right: 10%;
        }
        @media (max-width:868px){
        font-size:5vw;
    }
    `
    export const Mail = styled.a`
        text-decoration: none;
        color: white;
    `
    export const Map = styled.div`
        height: auto;
        width: 100vw;
    `
