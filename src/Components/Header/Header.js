import React from 'react'
import { Menu } from './Menu'
import { Logo } from './Logo'
import liana from '../../Imagenes/Lianas.png'

export const Header = () => {
  return (
    <div className='Header'>
      {/* <img className='liana' src={liana}/>
      <img className='liana2' src={liana}/>
      <img className='liana3' src={liana}/>
      <img className='liana4' src={liana}/>
      <img className='liana5' src={liana}/>
      <img className='liana6' src={liana}/>
      <img className='liana7' src={liana}/> */}
        <Logo/>
        <Menu/>
    </div>
  )
}
