import React, { useEffect, useState } from 'react'
import { VistaPreviaDinos } from './VistaPreviaDinos';



export const VistaPrevia = ({titulo,dataDinos}) => {


  return (
    <div className='VistaPrevia'>
      <h3>{titulo}</h3>
        <ol className='list-dinos'>
            <VistaPreviaDinos dataDinos={dataDinos}/>
        </ol>
    </div>
  )
}
