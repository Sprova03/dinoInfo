import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'


export const Menu = ({handleBlackMode,blackMode}) => {
  const param = useParams()
  const itemsMenu = (<>


      <li className='menu-item '><Link onClick={handleBlackMode} className='menu-item-link' id={`${blackMode ? 'blackModeHeader': ''}`}>BlackMode</Link></li>
      <li className='menu-item '><Link to='/carnivoros' className='menu-item-link' id={`${blackMode ? 'blackModeHeader': ''}`}>Carnívoros</Link></li>
      <li className='menu-item'><Link to='/herbivoros' className='menu-item-link' id={`${blackMode ? 'blackModeHeader': ''}`}>Herbívoros</Link></li>
      <li className='menu-item'><Link to='/curiosidades' className='menu-item-link' id={`${blackMode ? 'blackModeHeader': ''}`}>Curiosidades</Link></li>
      </>
  )

  return (
    <ul className='menu-conteiner'>
    {itemsMenu}
    </ul>
  )
}
