import React from "react"
import { Link } from "gatsby"

import Arguments from "../components/arguments"
import Intro from "../components/intro"
import Contact from "../components/contact"
import Demo from "../components/demo"
import Niche from "../components/niche"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Splash from "../components/splash"

// import "normalize.css"
import "../styles/index.scss"

import SmoothScroll from 'smooth-scroll/dist/smooth-scroll'
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300
});

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
		<Splash />
		<Intro />
		<Niche />
		<Arguments />
		<Demo />
		<Contact />
    
  </Layout>
)

export default IndexPage
