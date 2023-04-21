import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { dinosaurios } from '../../../Data/data';
import { Header } from '../../Header/Header';
import { DinoScreenCuriosidades } from './DinoScreenCuriosidades';


export const DinoScreen = () => {
  const [dino, setDino] = useState(dinosaurios)
  const {id} = useParams()
  useEffect(() => {
    setDino(dino.filter(e => e.id === (id * 1)))

  

  }, [])
  return (
    <section className='container-dino-screen'>
      <Header/>
      <div>
      <h1>
      {dino[0].nombre}
      </h1>
      <Link to={'/'}><h3>Volver</h3></Link>
      </div>
      <h3>{dino[0].descripcion}</h3>
      <img alt='Foto del dino' src={dino[0].img}/>
      <DinoScreenCuriosidades data={dino[0]}/>
      </section>
  )
}
