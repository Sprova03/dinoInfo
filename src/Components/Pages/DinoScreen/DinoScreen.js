import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { dinosaurios } from '../../../Data/data';
import { Header } from '../../Header/Header';
import { DinoScreenCuriosidades } from './DinoScreenCuriosidades';
import { DinoScreenImg } from './DinoScreenImg';
import { DinoScreenCualidades } from './DinoScreenCualidades';


export const DinoScreen = () => {
  const [dino, setDino] = useState(dinosaurios)
  const [tipoDieta, setTipoDieta] = useState('')



  const {id} = useParams()
  useEffect(() => {
    const dinos = dino.filter(e => e.id === (id * 1))
    setDino(dinos)

  

  }, [])

  useEffect(() => {
    
   setTipoDieta(dinosaurios.filter(e => e.id === (id * 1))[0].dieta)
  })
  

  return (
    < >
      <Header/>
      <div className='container-dino-screen'>
        <div className='dino-screen-title'>
      <h2>
      {dino[0].nombre}
      </h2>
      <Link to={'/'}><h3>Volver</h3></Link>
        </div>
        <div className='dino-screen-descripcion'> 
      <h3>{dino[0].descripcion}</h3>
      </div>
      </div>
      <div className='dino-screen-cualidades'>
      <DinoScreenCualidades tipoDieta={tipoDieta} data={dino[0]}/>
      <DinoScreenImg data={dino[0]}/>
      </div>
      <div className='dino-screen-curiosidades'>
        <h3>Curiosidades:</h3>
      <DinoScreenCuriosidades tipoDieta={tipoDieta} data={dino[0]}/>
      </div>
      </>
  )
}
