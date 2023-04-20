import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { SeccionDino } from '../SeccionDinosaurios/SeccionDino'
import { Home } from '../Pages/Home/Home'
import { Logo } from '../Header/Logo'
import { DinoScreen } from '../Pages/DinoScreen/DinoScreen'
import { CarnivorosScreen } from '../Pages/Carnivoros/CarnivorosScreen'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='carnivoros' element={<CarnivorosScreen/>}/>
        <Route path='herbivoros' element={<Logo/>}/>
        <Route path='curiosidades' element={<SeccionDino/>}/>
     
        <Route path='dino/:nombre/:id' element={<DinoScreen/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
    </Routes>
  )
}
