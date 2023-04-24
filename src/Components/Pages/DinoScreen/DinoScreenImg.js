import React from 'react'

export const DinoScreenImg = ({data}) => {
  return (
    <div className='dino-screen-img'>

    <img alt='Foto del dino' src={data.img}/>
    </div>
  )
}
