import React from "react"
import { Link } from "gatsby"

import Arguments from "../components/arguments"
import Contact from "../components/contact"
import Demo from "../components/demo"
import Niche from "../components/niche"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Splash from "../components/splash"

import "normalize.css"
import "../styles/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
		<Splash />
		<Arguments />
		<Demo />
		<Niche />
		<Contact />
    
  </Layout>
)

export default IndexPage
