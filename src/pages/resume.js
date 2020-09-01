import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Resume</h1>

    <a href="https://github.com/rachel-fischoff/gatsby-portfolio/blob/master/src/images/Rachel_Fischoff_FE_SEPT_2020.pdf">
      Front End Resume
    </a>
    <br />
    <br />
    <a href="https://github.com/rachel-fischoff/gatsby-portfolio/blob/master/src/images/Rachel_Fischoff_FS_Sept_2020.pdf">
      Full Stack Resume
    </a>

    <br />
    <br />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resume
