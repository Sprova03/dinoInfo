import React, { useEffect, useState } from 'react'
import { dinosaurios } from '../../../Data/data'
import { VistaPreviaBuscador } from './VistaPreviaBuscador/VistaPreviaBuscador'



export const Buscador = () => {
  
  const [dinos, setDinos] = useState([])
  const [inputVal, setInpuVal] = useState('')



  const handlerFocus = (event) => {
    let inputValue = event.target.value
    setInpuVal(event.target.value)

    let vistaPreviaDinos = []

    if(inputValue.length >=  3){
      vistaPreviaDinos = dinosaurios.filter(element => element.nombre.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0)
      setDinos(vistaPreviaDinos);
      return;
    }

    setDinos([]);
  }


  const handleVistaPrevia = (event) => {
    let inputValue = event.target.value
    setInpuVal(event.target.value)

    let vistaPreviaDinos = []

    if(inputValue.length >=  3){
      vistaPreviaDinos = dinosaurios.filter(element => element.nombre.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0)
      setDinos(vistaPreviaDinos);
      return;
    }

    setDinos([]);
   
  }
 
  
  return (
    <form onSubmit={e => e.preventDefault()} className='form-buscador-dino'>
      <div className='form-buscador-dino-input-contenedor'>
        <input value={inputVal} onFocus={ (e) =>handlerFocus(e)}  onChange={(e) => handleVistaPrevia(e)} placeholder='Buscar Dino'></input>
        {dinos.length !== 0   ? <VistaPreviaBuscador data={dinos}/> : ''}
        </div>
    </form>
  )
}
