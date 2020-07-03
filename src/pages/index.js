import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2  style={{paddingTop:'8px',
    paddingBottom: '8px'}}>Hello humans</h2>
    <h2>I'm Rachel Fischoff</h2>
    <h4>
      A full stack software engineer who loves learning new things, social
      justice, data, and simple design.
    </h4>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
