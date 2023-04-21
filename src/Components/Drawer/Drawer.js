import React, { useState } from 'react'
import ReactDOM  from 'react-dom'
export const Drawer = ({showDrawer, click}) => {
   
  const drawer = <aside onClick={click} className={`drawer ${showDrawer ? 'drawerActive' : ''}`}></aside>
  return ReactDOM.createPortal(drawer, document.getElementById('drawe-hook'))
}
