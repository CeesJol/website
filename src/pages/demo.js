import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/index.scss"

const DemoPage = () => (
  <Layout>
    <SEO title="Demo" />
    <h1>Demo page TODO</h1>
    <Link to="/">Back home</Link>
  </Layout>
)

export default DemoPage
