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
    background-color:white;
    text-align: center;
        @media (max-width:868px){
            width: 100%;
            justify-content: flex-start;
            color:black;
  
        }
    
    p{        
        width:80vw;
        font-size:clamp(2vw,4vw,7vw);
        
    }
    h1{
        font-size:clamp(2vw,4vw,7vw);
    }
`