import React from 'react'
import { ItemMenuLateral } from './ItemMenuLateral'

export const ItemsMenuLateral = ({titulo,getDataDinos}) => {

  return (
    <div className='lista-menu-lateral'>

    <ul>
        <h3>Categorias:</h3>
        <ItemMenuLateral titulo={titulo} getDataDinos={(e)=>getDataDinos(e)}/>
        
    </ul>
    </div>
  )
}
