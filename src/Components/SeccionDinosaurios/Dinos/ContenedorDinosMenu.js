import React from 'react'
import { ItemsMenuLateral } from './MenuLateral/ItemsMenuLateral'
import { VistaPrevia } from './VistaPreviaDinos/VistaPrevia'

export const ContenedorDinosMenu = ({titulo, getDataDinos, dataDinos}) => {
  return (
    <div className='contenedor-dinos-menu'>
        <ItemsMenuLateral titulo={titulo} getDataDinos={(e) => getDataDinos(e)}/>
        <VistaPrevia titulo={titulo} dataDinos={dataDinos}/>
    </div>

  )
}
