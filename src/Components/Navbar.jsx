import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import "./Navbar.module.scss"
import NavbarStyles from "./Navbar.module.scss"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={NavbarStyles.header}>
      <h1>
        <Link to="/" className={NavbarStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={NavbarStyles.navList}>
          <li>
            <Link
              to="/"
              className={NavbarStyles.navItem}
              activeClassName={NavbarStyles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={NavbarStyles.navItem}
              activeClassName={NavbarStyles.activeNavItem}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={NavbarStyles.navItem}
              activeClassName={NavbarStyles.activeNavItem}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={NavbarStyles.navItem}
              activeClassName={NavbarStyles.activeNavItem}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
