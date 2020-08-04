import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>
      Hello there, I'm Rachel. I am scorpio sun, scorpio rising, and leo moon
      based in Durham, NC. As a full stack software engineer, I solve problems
      in a way that incorporates design. From UX/UI to querying databases to
      creating API architecture to Machine Learning and the day to day debugging, I
      thoroughly enjoy being an engineer. I find the endless amount of resources
      and constant evolving of technologies to be tantalizing. My primary
      technologies are the MERN Stack (MongoDB, Express.js, React.js and
      Node.js). I’ve also worked with HTML/CSS, WordPress, Python/Flask & MySQL.
      I’m always willing to volunteer my time & knowledge on projects that
      either work toward social justice or are open source. Please feel free to
      contact me!
    </p>
    <br/>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
