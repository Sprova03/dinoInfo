import React from 'react'

export const DinoScreenCuriosidades = ({tipoDieta, data}) => {
  return (
    <div className='dino-screen-container-lista'>
      <ul className={`dino-screen-lista ${tipoDieta}`}>
    {data.curiosidades.map(e =>  <li className='dino-screen-lista-item'><p>{e}</p></li>)}
    </ul>
  </div>
  )
}
