import {
    useEffect,
    useState
} from 'react'

const useScroll=()=>{
        const [scrollY,setScrollY] = useState(0)
        const [Mobile,setMobile] = useState(false)
window.addEventListener('scroll', (e)=>{
    setScrollY(document.getElementById('root').getBoundingClientRect().top)
   if(window.innerWidth<=850){
       setMobile(true)
   }
   else{
       setMobile(false)
   }
})
    window.addEventListener('resize',()=>{
        if(window.innerWidth<=850){
            setMobile(true)
        }
        else{
            setMobile(false)
        }
    })
useEffect(()=>{
    if(window.innerWidth<=850){
        setMobile(true)
    }
    else{
        setMobile(false)
    }
})

return {scrollY,Mobile}
}
export default useScroll;