import React from 'react'

function Card({colorName,color_code}) {
  return (
    <>
    <div className='display'>
      <p style={{ height:220,width:230, backgroundColor:`${color_code}`}} ></p>
      <p className='text'  >{color_code}</p>
      <p className='text' style={{color:`${color_code}`,fontSize:20}} >{colorName}</p>
    
    </div>
    </>
  )
}

export default Card