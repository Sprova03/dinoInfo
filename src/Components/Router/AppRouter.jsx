import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { SeccionDino } from '../SeccionDinosaurios/SeccionDino'
import { Home } from '../Pages/Home/Home'
import { Logo } from '../Header/Logo'
import { DinoScreen } from '../Pages/DinoScreen/DinoScreen'
import { CarnivorosScreen } from '../Pages/Carnivoros/CarnivorosScreen'

export const AppRouter = () => {

  const [blackMode, setBlackMode] = useState(false);
  
  const handleBlackMode = () => {
    setBlackMode( (e)=> {
      if(!e){
        document.querySelector('body').style.backgroundColor = '#000' 
        document.getElementById('root').style.backgroundColor = '#333'   
        document.getElementById('root').style.color = '#fff'   
        
        return !blackMode
      
        }else{
        document.getElementById('root').style.backgroundColor = '#F9F9F9'   
        document.getElementById('root').style.color = '#000'   
        document.querySelector('body').style.backgroundColor = '#fff' 


        return !blackMode
        }
    
    })
  
  }


  return (
    <Routes>
        <Route path='/' element={<Home blackMode={blackMode}  handleBlackMode={handleBlackMode}/>}/>
        <Route path='carnivoros' element={<CarnivorosScreen/>}/>
        <Route path='herbivoros' element={<Logo/>}/>
        <Route path='curiosidades' element={<SeccionDino/>}/>
     
        <Route path='dino/:nombre/:id' element={<DinoScreen/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>
    </Routes>
  )
}
