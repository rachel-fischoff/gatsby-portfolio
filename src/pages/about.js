import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>
      Hello there, I'm Rachel. I am a scorpio sun, with a scorpio rising, and a
      leo moon based in Durham, NC. As a full stack software engineer, I
      approach problems by incorporating best practices for front end, back end &
      data engineering. 
      <br />
      <br />
      From UX/UI to querying databases. From creating API architecture to
      Machine Learning. Not to mention the classic day to day debugging; I
      thoroughly enjoy being an engineer.
      <br />
      <br />
      I'm proficient in building applications using the MERN Stack (MongoDB,
      Express.js, React.js and Node.js) in addition to HTML/CSS, WordPress,
      Python/Flask & MySQL. I've began contributing to open source & I am
      excited to contribute to more projects.
      <br />
      <br />
      I’m always willing to volunteer my time and knowledge for projects focused on
      improving the lives of Black folx. More specifically, projects for trans Black
      folx, queer Black folx and/or projects that increase access to mental health services. Please feel free to
      contact me!
    </p>
    <br />

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
