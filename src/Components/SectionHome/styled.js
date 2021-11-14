import styled from 'styled-components'

export const SectionHome=styled.div`
    width: 100%;
    height: auto;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    margin-bottom: 5%;
    flex-direction:column;
    background-color:black;
    text-align: center;
        @media (max-width:868px){
            width: 100%;
            justify-content: flex-start;
            color:white;
            margin-top:30%;

        }
    
    p{        
        width:80vw;
        font-size:clamp(2vw,4vw,7vw);
        @media (max-width:868px){
            font-size:clamp(3vw,5vw,8vw)
        }   
    }
    h1{
        font-size:clamp(2vw,4vw,7vw);
    }
`