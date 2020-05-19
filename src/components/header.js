import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle = `` }) => (
  <header className="header">
    <div className="content-container">
      <h1 className="header__title">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

export default Header
