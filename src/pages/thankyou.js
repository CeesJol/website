import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/index.scss"

const ThankYou = () => (
  <Layout>
    <SEO title="Demo" />
    <h1>Thank you!</h1>
    <Link to="/">Back home</Link>
  </Layout>
)

export default ThankYou
