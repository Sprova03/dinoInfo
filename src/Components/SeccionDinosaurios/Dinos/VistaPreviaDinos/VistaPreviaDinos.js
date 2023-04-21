import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export const VistaPreviaDinos = ({dataDinos}) => {
  

  return (

    dataDinos.map(dinosaurio => <li id={dinosaurio.id} key={dinosaurio.nombre + dinosaurio.id}>

      <img src={dinosaurio.img}/>
      <div className='dino-descripcion'>
        <p className='dino-descripcion-nombre'>{dinosaurio.nombre}</p>
        <p>{dinosaurio.curiosidades[0]}</p>
        <p>{dinosaurio.curiosidades[1]}</p>
        <div className='dino-descripcion-link'>

        <Link to={`/dino/${dinosaurio.nombre}/${dinosaurio.id}`}>Mas...</Link>
        
        </div>
      </div>
    </li>)
    
  )
}
