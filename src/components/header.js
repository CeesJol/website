import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle = `` }) => (
  <header className="header">
		<h3>
			<Link className="header__title" to="/">{siteTitle}</Link>
		</h3>
  </header>
)

export default Header
