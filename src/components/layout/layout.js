import React from 'react'

import 'normalize.css'
import '../../fonts/fonts.css'
import * as style from './style'
import Header from '../header/header'
import Footer from '../footer/footer'
import SidePanel from '../sidePanel/sidePanel'
import { Link } from 'gatsby'

function Layout({ children }) {
  return (
    <>
      <div>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <Header />
        </Link>
        <span
          style={{ float: 'right', backgroundColor: 'yellow', padding: '1em' }}
        >
          Hasdddddddddddddddddlo
        </span>
      </div>
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
