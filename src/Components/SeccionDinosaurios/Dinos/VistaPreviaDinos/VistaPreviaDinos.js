import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export const VistaPreviaDinos = ({dataDinos}) => {
  

  return (

    dataDinos.map(dinosaurio => <li id={dinosaurio.id} key={dinosaurio.nombre + dinosaurio.id}>

      <img src={dinosaurio.img}/>
      <div className='dino-descripcion'>
        <h3>{dinosaurio.nombre}</h3>
        <h4>{dinosaurio.curiosidades[0]}</h4>
        <h4>{dinosaurio.curiosidades[1]}</h4>
        <div className='dino-descripcion-link'>

        <Link to={`/dino/${dinosaurio.nombre}/${dinosaurio.id}`}>Mas...</Link>
        
        </div>
      </div>
    </li>)
    
  )
}
