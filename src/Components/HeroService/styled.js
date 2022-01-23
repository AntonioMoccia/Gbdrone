import styled from 'styled-components'


export const HeroService_Wrapper_FotoLefth=styled.div`
    height:70vh;
    width:100vw;
    background-color:black;
    display:flex;
    align-content:center;
    justify-content:space-around;
    align-items:center;

    img{
        height:auto;
        width:40%;
        height:75%;
        position:relative;
        left:5%;
    }
    @media (max-width:1050px){
        margin-top:5%;
        flex-direction:column;
        justify-content:space-around;
        background-color:black;
        height:auto;

        img{
            height:auto;
            left:0;
            width:80vw;
            max-height:50%;
            max-width:80vw;
            position:relative;
        }
    }
`

export const HeroService_Text_FotoLefth=styled.div` 
 
        max-width:50%;
        background-color:black;
        display:flex;
        align-items:flex-start;
        align-content:flex-start;
        justify-content:center;
        flex-direction:column;
        min-width: 50%;
        margin-left: 5%;
        p{
            padding-top:10px;
            padding-right:5%;
            font-size:1.2vw;
        }
        @media (max-width:1050px){
            margin-top: 5%;
            max-width:80%;
            width:80%;
            align-content:flex-start;
            justify-content: flex-start;
            p{
            font-size:3.6vw;
            width:100%;
            text-align: left;
            }
    }


`

/*export const HeroService_Wrapper_FotoRight=styled.div`
    height:100vh;
    width:100vw;
    background-color:white;
    display:flex;
    align-content:center;
    justify-content:space-between;
    align-items:center;

    img{
        height:auto;
        max-width:50%;
        max-height:80%;
        position:relative;
        right:5%;
    }
`

export const HeroService_Text_FotoRight=styled.div` 
        height:100%;
        max-width:50%;
        background-color:white;
        display:flex;
        align-items:flex-start;
        align-content:center;
        justify-content:center;
        flex-direction:column;
        p{
            padding-top:10px;
            padding-left:5%;
            font-size:1.2vw;
        }
        h1{
            padding-left:5%;
        }
`*/