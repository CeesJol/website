import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle = `` }) => (
  <header className="header">
		<h2>
			<Link className="header__title" to="/">{siteTitle}</Link>
		</h2>
  </header>
)

export default Header
