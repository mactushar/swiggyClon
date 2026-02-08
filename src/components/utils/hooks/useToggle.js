import { useState } from "react"


const useToggle = (val=false)=>{

    const [value,seToggle]=useState(val)

    const toggle = ()=>{
        seToggle((prev)=> !prev)
    }

 return [value,toggle]



}
export {useToggle}