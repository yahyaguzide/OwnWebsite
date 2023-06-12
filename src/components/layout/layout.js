import React from 'react'

import 'normalize.css'
import '../../fonts/fonts.css'
import * as style from './style'
import Header from '../header/header'
import Footer from '../footer/footer'
import SidePanel from '../sidePanel/sidePanel'

function Layout({ children }) {
  return (
    <>
      <Header />
      <style.layoutContainer>
        <div>{children}</div>
        <style.sidePanelContainer>
          <SidePanel />
        </style.sidePanelContainer>
      </style.layoutContainer>
    </>
  )
}

export default Layout
