import React from 'react'
import { ItemMenuLateral } from './ItemMenuLateral'
import LianasMeLit from '../../../../Imagenes/LianasMeLit.png'
import LianasMeLit2 from '../../../../Imagenes/LianasMeLit2.png'
// import DinoMeLit from '../../../../Imagenes/DinoMeLit2.png'
export const ItemsMenuLateral = ({titulo,getDataDinos}) => {

  return (
    <div className='lista-menu-lateral'>
        <img className='LianasMeLit' src={LianasMeLit}/>
        <img className='LianasMeLit2' src={LianasMeLit2}/>
        {/* <img className='DinoMeLit' src={DinoMeLit}/>  */}
    <ul className='lista-menu-lateral'>
        <h3>Categorias:</h3>
        <ItemMenuLateral titulo={titulo} getDataDinos={(e)=>getDataDinos(e)}/>
        
    </ul>
    </div>
  )
}
