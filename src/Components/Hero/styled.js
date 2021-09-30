import styled from 'styled-components'


export const Hero = styled.div`
    background-image:url(${({image})=>image});
    background-position:${({parallax,parallaxActive})=>{return parallaxActive?`0% ${parallax/7}%`:'center'}};
    background-size:${({Mobile})=>Mobile?'120% 120%': 'cover'};
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:3vw;
    flex-direction:column;
    background-color:grey;
    padding-top:${({paddingTop})=>paddingTop?paddingTop:0};
    z-index:-1;

  /*  padding-top:35vh;*/
`;
export const TextHero=styled.p`
    color:white;
    font-size:3vw;
    text-align:center;
    @media (max-width:868px){
        font-size:5vw;

    }
`;
export const HeroButton = styled.button`
    height:8vh;
    min-height: 4rem;
    width:20vw;
    border-radius:50px;
    border-color:transparent;
    margin-top:5vh;
    background-color:white;
    font-size:1.2vw;
    font-weight:-100;
    @media (max-width:868px){
        width:45vw;
        font-size:3.8vw;
    }

`


