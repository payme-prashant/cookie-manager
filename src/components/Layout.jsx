import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { NameContext } from '../hooks/MyContext.jsx'
import Cookie from './Cookie.jsx'
import Popup from './Popup.jsx'

function Layout() {
  const {show, showPopup } = useContext(NameContext)
  console.log(showPopup, "show")
  
  return (
    <div>
      {showPopup && <Popup/>}
      <Cookie/>
      <Outlet/>
    </div>
  )
}

export default Layout