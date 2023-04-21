import React, { useState } from 'react'




export const ItemMenuLateral = ({titulo,getDataDinos}) => {

  


  console.log(titulo);


  
  return (
<>
    <li className='item-menu-lateral' ><h3>Categorias:</h3></li>
    <li className='item-menu-lateral' >Alimentacion:
    <a className={titulo === 'Carnívoros'? 'item-menu-lateral-active' : '' } onClick={(e) => getDataDinos(e)}>Carnívoros</a>
    <a className={titulo === 'Herbívoros'? 'item-menu-lateral-active' : '' } onClick={(e) => getDataDinos(e)}>Herbívoros</a></li>

    <li className='item-menu-lateral'>Perdiodo: 
    <a className={titulo === 'Cretácico'? 'item-menu-lateral-active' : '' } onClick={(e) => getDataDinos(e)}>Cretácico</a> 
    <a className={titulo === 'Jurásico'? 'item-menu-lateral-active' : '' }onClick={(e) => getDataDinos(e)}>Jurásico</a></li>

    <li className='item-menu-lateral'>Ubicacion Geografica:
    <a className={titulo === 'África'? 'item-menu-lateral-active' : '' } onClick={(e) => getDataDinos(e)}>África </a> 
    <a className={titulo === 'América del Norte'? 'item-menu-lateral-active' : '' } onClick={(e) => getDataDinos(e)}>América del Norte</a>
    <a className={titulo === 'América del Sur'? 'item-menu-lateral-active' : '' } onClick={(e) => getDataDinos(e)}>América del Sur</a>
    <a className={titulo === 'Asia'? 'item-menu-lateral-active' : '' } onClick={(e) => getDataDinos(e)}>Asia</a>
    <a className={titulo === 'Europa'? 'item-menu-lateral-active' : '' } onClick={(e) => getDataDinos(e)}>Europa</a>
    <a className={titulo === 'Oceanía'? 'item-menu-lateral-active' : '' } onClick={(e) => getDataDinos(e)}>Oceanía</a></li>
    </>
  )
}
