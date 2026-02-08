import React from 'react'
import { UseFetch } from '../../utils/hooks/UseFetch'
import RestaurentList from './RestaurentList'

const Restaurent = () => {
    const {data} =UseFetch("http://localhost:4000/restaurants")
    console.log("restorent datat",data)
  return (
   <>
  
   {
    data?.map((el,index)=>{
        return <RestaurentList {...el} index={index} key={el.id}/>
    })
   }
   
   </>
  )
}

export default Restaurent