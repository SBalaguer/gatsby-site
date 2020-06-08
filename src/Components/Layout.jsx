import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/index.scss"
import LayoutStyles from "./Layout.module.scss"

const Layout = props => {
  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        <Navbar />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
