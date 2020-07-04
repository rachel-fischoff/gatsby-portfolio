import React from "react"
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <div style = {{ textAlign: 'center'}}> */}
    <div style = {{ display: "inline-flex"}}>
    <h2 style={{ marginTop: "20px"}}>Hello humans </h2>
    <BuildOutlinedIcon style={{ marginLeft:"20px", marginTop: "20px" }} />
    <BuildOutlinedIcon style={{ marginLeft:"20px", marginTop: "20px" }} />
    <BuildOutlinedIcon style={{ marginLeft:"20px", marginTop: "20px" }} />
    </div>
    <h2>I'm Rachel(she/her)</h2>
    <h4>
      A full stack software engineer who loves learning new things, social
      justice, data, and simple design.
    </h4>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {/* </div> */}
  </Layout>
)

export default IndexPage
