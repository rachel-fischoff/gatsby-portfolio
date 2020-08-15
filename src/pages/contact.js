import React from "react"
import { Link } from "gatsby"
import MailOutlineIcon from "@material-ui/icons/MailOutlineOutlined"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>COMING SOON!</p>
    <a href="mailto:rfischoff@gmail.com">
      <MailOutlineIcon />
    </a>

    <br />
    <br />
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
