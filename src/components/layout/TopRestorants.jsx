import React from 'react'
import Card from '../ui/Card'

const TopRestorants = ({data}) => {


 //"RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/fa5bf4f1-3569-4423-b2c8-0e7fb470616b_611682.JPG"

  
  return (
   <div className=''> 

    <h2 className=' pt-7 pb-4.5 '>{data?.data?.card?.card?.header?.title}</h2>
    <div className='flex gap-8 overflow-x-scroll scrollbar-hide'>
    { data?.data?.card?.card?.gridElements?.infoWithStyle?.restaurants.map((el,i)=>{

      return <Card key={i} data={el}/>

    })}
   </div>
   </div>
  )
}

export default TopRestorants