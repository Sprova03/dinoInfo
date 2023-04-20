import React from 'react'
import { ElementosVistaPrevia } from './ElementosVistaPrevia'

export const VistaPreviaBuscador = ({data}) => {
  return (
    <>
  {data.length > 0 ?(<ul className='vista-previa-buscador'>
      {data.map(dino =><ElementosVistaPrevia dino= {dino}/>)}
    </ul>) : <></>}
    
    </>
  )
}
