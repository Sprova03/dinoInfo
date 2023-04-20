import React from 'react'
import { Link } from 'react-router-dom'

export const ElementosVistaPrevia = ({dino}) => {
  return (
    <Link className='elementos-vista-previa' to={`/dino/${dino.nombre}/${dino.id}`}>
        <img src={dino.img}></img>
        <h3>{dino.nombre}</h3>
     
    </Link>




  )
}
