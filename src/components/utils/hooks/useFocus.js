import { useEffect } from "react"
import { useRef } from "react"

const useFocus = (focus=false)=>{
     const inputRef = useRef(null)
    useEffect(()=>{
    if(focus){

     inputRef?.current?.focus()

    }

    },[focus])
    return {inputRef}

}

export {useFocus}