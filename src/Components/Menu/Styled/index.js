import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkMenu =styled(Link)`
    color:white;
    text-transform:uppercase;
    text-decoration:none;
    &:hover{
        color:black
    }
`
export const Logo =styled(Link)`
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    text-decoration:none;
    text-transform:uppercase;
    img{
        margin-top: 8px;
        max-width:160px;
        height: auto;
    }
`;

export const Nav =styled.nav`

    height:10vh;
    min-height:90px;
    width:${({isFixed})=>{return isFixed==true? '100vw': '80vw'}} ;
    margin-left:${({isFixed})=>{return isFixed==true? 0: '10vw'}} ;
    margin-top:${({isFixed})=>{return isFixed==true? 0: '10vh'}} ;
    display:flex;
    justify-content:space-between;
    background-color:black;
    padding-right:5vw;
    padding-left:5vw;
    position: ${({isFixed})=>{return isFixed==true? 'fixed': 'absolute'}} ;
    z-index:100;
    align-content:center;
    align-items:center;
    @media (max-width:868px){
        width:100vw;
        margin-right:0;
        margin-left:0;
        margin-top:0;
        position:fixed;
    }

    .hUtUaJ .nav-list-link a:hover {
    color: black;

}
    .inner-drop-down{
        display:flex;
        flex-direction:column;
        color:black;
        a{
            color:black;
                background-color:white;
                &:hover{
                    color:black;
                }
        }
        @media (max-width:868px){

        }
    }

    .nav-list-link{
        display:flex;
        justify-content:space-around;
        align-items:center;        
        width:50vw;
        padding-right:10vw;
        align-content:center;
            padding-top:2%;
            color:white;
        @media (max-width:868px){
                background-color:black;
                width:60vw;
                height:100vh;
                position:absolute;
                flex-direction:column;
                padding-top:20vh;
                padding-bottom:20vh;
                justify-content:center;
                right:0;
                top:0;
       
                margin:0;
                transition:ease-out 0.2s all;
                transform:${({isOpened})=>{
                    return isOpened==true? 'translateX(0%)' : 'translateX(100%)'
                }};
                 }
                 a:hover{
                    color:black
                 }
            li,.nav-link{
                    text-align:center;
                    padding:0;
                    margin:0;
                    align-items:center;
                    height:100%;
                    display:flex;
                    justify-content:center;
                    color:white;
                    text-transform:uppercase;
                    &:hover{
                     transform:scale(1.1);
                     color:white
            }
            @media (max-width:868px){
                padding-bottom:1vh
    }

 

        }
};

`;
export const MenuIcon=styled.div`
            display:none;
            @media (max-width:868px){
                        display:inline-block;
                        position:absolute;
                        height:100%;
                        right:3.5vw;
                        display:flex;
                        align-items:center;
                        color:white;
                        font-size:30px;
                        z-index:100;
                }
`;
export const ContactButton = styled(Link)`
    background-color:black;
    text-decoration:none;
    padding:5px;
    height:6vh;
    width:10vw;
    display:flex;
    justify-content:center;
    align-content:center;
    align-items:center;
    p{
        color:white;
        text-transform:uppercase;
        font-size:18px;
    }
    &:hover{
        background-color:black;
        p{
            color:white;
        }
    }

`
export const ExternalClick=styled.div`
    display:none;
    @media (max-width:868px){
            height:100vh;
            width:100vw;
            position:absolute;
    }
`
