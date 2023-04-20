import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'


export const Menu = () => {
  const param = useParams()
  const itemsMenu = (<>

    
      <li className='menu-item'><Link to='/carnivoros' className='menu-item-link'><p>Carnívoros</p></Link></li>
      <li className='menu-item'><Link to='/herbivoros' className='menu-item-link'><p>Herbívoros</p></Link></li>
      <li className='menu-item'><Link to='/curiosidades' className='menu-item-link'><p>Curiosidades</p></Link></li>
      </>
  )

  return (
    <ul className='menu-conteiner'>
    {!param.id ? itemsMenu: ''}
    </ul>
  )
}
