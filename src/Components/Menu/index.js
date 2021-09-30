import React,{useState, useRef, useEffect} from 'react'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import {useLocation} from 'react-router-dom'
import {motion} from 'framer-motion'
import {
LinkMenu,
Logo,
Nav,
MenuIcon
} from './Styled'
import LogoNero from '../../img/LogoNero.png'
function Menu() {
const [isOpened,setIsOpened]=useState(false)
const [isFixed,setIsFixed]=useState(false)
const location = useLocation()
const menuRef=useRef()

const Operation=()=>{
    if(menuRef.current){
      
        if(document.getElementById('root').getBoundingClientRect().top<0){
            setIsFixed(true)
        }
        else{
            setIsFixed(false)
        }
    }
    else {
        
    }
}
useEffect(()=>{
    setIsFixed(false)
},[location.pathname])
window.addEventListener('wheel',(e)=>{
    Operation()
})
window.addEventListener('scroll',(e)=>{
    Operation()
})




    return (
<ClickAwayListener onClickAway={()=>{
    setIsOpened(false)
}}>
    <motion.div

        animate={isFixed?{
            y:0,
            opacity: 1,
            width: '100vw'
        }:{}}
        transition={{
            duration:10
        }}
    >
<Nav 
isOpened={isOpened} 
isFixed={isFixed} 
ref={menuRef}

>

                <Logo to="/" onClick={()=>{
                        setIsOpened(false)
                    }}>
                    <h1><img src={LogoNero} /></h1>
                </Logo>

            <ul className='nav-list-link'>
                <li>
                    <LinkMenu to="/" onClick={()=>{
                        setIsOpened(false)
                    }}>
                    <p className='nav-link'>Home</p>
                    </LinkMenu>
                </li>
                <li>
                    <LinkMenu to="services" onClick={()=>{
                        setIsOpened(false)
                    }}>
                    <p className='nav-link'>Servizi</p>
                    </LinkMenu>
                </li>

                <li>
                    <LinkMenu to="/contact" onClick={()=>{
                        setIsOpened(false)
                    }}>
                    <p className='nav-link'>Contattami</p>
                    </LinkMenu>
                </li>

            </ul>


            <MenuIcon className='burger' onClick={()=>{
                setIsOpened(!isOpened)
            }}>
                <HiOutlineMenuAlt3 className='burger' />
            </MenuIcon>

        </Nav>
        </motion.div>
        </ClickAwayListener>
        )
}

export default Menu
