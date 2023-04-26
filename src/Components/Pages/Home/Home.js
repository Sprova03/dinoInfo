import React from 'react'
import { Header } from '../../Header/Header'
import { Presentacion } from '../../Presentacion/Presentacion'
import { SeccionDino } from '../../SeccionDinosaurios/SeccionDino'

export const Home = ({handleBlackMode,blackMode}) => {
  return (
    <>
    <Header handleBlackMode={handleBlackMode} blackMode={blackMode}/>
<Presentacion blackMode/>
<SeccionDino blackMode/>
</>
  )
}
