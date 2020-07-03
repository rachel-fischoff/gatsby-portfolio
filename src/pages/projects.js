import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <p>Rachel Fischoff</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Projects