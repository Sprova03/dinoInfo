import React from 'react'
import logo from '../../Imagenes/DinosImg/tiranosaurioRex.png'

export const Logo = () => {
  return (
    <div className='logo-container'><img className='logo-img' src={logo}/><p><span className='titulo-d'>D</span>ino<span className='titulo-i'>I</span>nfo</p></div>
  )
}
