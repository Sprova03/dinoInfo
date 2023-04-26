import React from 'react'
import { Menu } from './Menu'
import { Logo } from './Logo'


export const Header = ({handleBlackMode,blackMode}) => {
  return (
    <div className={`Header ${blackMode ? "blackModeHeader" : ''}`}>

        <Logo/>
        <Menu handleBlackMode={handleBlackMode} blackMode={blackMode}/>
    </div>
  )
}
