

import React, { useEffect, useState } from 'react'
import { Buscador } from './Buscador/Buscador'
import { ContenedorDinosMenu } from './Dinos/ContenedorDinosMenu'
import { dinosaurios } from '../../Data/data'

export const SeccionDino = () => {
    const [dinoData, setDinoData] = useState([])
    const [tituloCategoria, setTituloCategoria] = useState('')
    const [activeClass, setActiveClass] = useState(false)
    useEffect(() => {
        setTituloCategoria('Carnívoros')
        setDinoData(dinosaurios.filter(e => e.dieta.trim().toLowerCase() === 'carnívoro'))
    
    
    }, [])
    

    const getDataDinos = (e) => { 
      const  textoBoton =e.target.text.trim().toLowerCase()

        

        switch (textoBoton) {
            case 'herbívoros':
                setTituloCategoria('Herbívoros') 
            setDinoData(dinosaurios.filter(e => e.dieta.trim().toLowerCase() === 'herbívoro'))
            break;
            case 'carnívoros':
                setTituloCategoria('Carnívoros')
            setDinoData(dinosaurios.filter(e => e.dieta.trim().toLowerCase() === 'carnívoro'))
                break;
            case 'cretácico':
                setTituloCategoria('Cretácico')

            setDinoData(dinosaurios.filter(e => e.periodo.trim().toLowerCase().includes('cretácico')))
                break;
            case 'jurásico':
                setTituloCategoria('Jurásico')

            setDinoData(dinosaurios.filter(e => e.periodo.trim().toLowerCase().includes('jurásico')))
                break;
            case 'américa del norte':
                setTituloCategoria('América del Norte')

            setDinoData(dinosaurios.filter(e => e.ubicacionGeografica.trim().toLowerCase().includes('norte')))
                break;
            case 'asia':
                setTituloCategoria('Asia')

            setDinoData(dinosaurios.filter(e => e.ubicacionGeografica.trim().toLowerCase().includes('asia')))
                break;
            case 'américa del sur':
                setTituloCategoria('América del Sur')

            setDinoData(dinosaurios.filter(e => e.ubicacionGeografica.trim().toLowerCase().includes('sur')))
                break;
            case 'europa':
                setTituloCategoria('Europa')

            setDinoData(dinosaurios.filter(e => e.ubicacionGeografica.trim().toLowerCase().includes('europa')))
                break;
            case 'áfrica':
                setTituloCategoria('África')

            setDinoData(dinosaurios.filter(e => e.ubicacionGeografica.trim().toLowerCase().includes('áfrica')))
                break;
            case 'oceanía':
                setTituloCategoria('Oceanía')

            setDinoData(dinosaurios.filter(e => e.ubicacionGeografica.trim().toLowerCase().includes('oceanía')))
                break;
        
                default:
  

                    break;
                }
                }


  return (
    <div className='seccionDino'>
        <Buscador/>
        <ContenedorDinosMenu titulo={tituloCategoria} dataDinos={dinoData}  getDataDinos={(e) => getDataDinos(e)}/>
        
    </div>
  )
}
