import React from 'react'

export const DinoScreenCualidades = ({tipoDieta, data}) => {
  return (
    <ul className={`dino-screen-lista-cualidades ${tipoDieta}`}>
    <li  className='dino-screen-lista-item'><span>P</span>eríodo: {data.periodo}.</li>
    <li className='dino-screen-lista-item'><span>U</span>bicación: {data.ubicacionGeografica}.</li>
    <li className='dino-screen-lista-item'><span>D</span>ieta: {data.dieta}.</li>
    <li className='dino-screen-lista-item'><span>T</span>amaño: {data.tamaño}.</li>
    <li className='dino-screen-lista-item'><span>P</span>eso: {data.peso}.</li>
  </ul>
  )
}
