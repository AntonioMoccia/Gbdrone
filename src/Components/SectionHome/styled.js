import styled from 'styled-components'

export const SectionHome=styled.div`
    height:50vh;
    width:100vw;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    background-color:white;
    p{        
        width:80vw;
        font-size:clamp(2vw,4vw,7vw);
        text-align:center;
    }
    h1{
        font-size:clamp(2vw,4vw,7vw);
    }
`