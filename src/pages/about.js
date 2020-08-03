import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>
      Hello there. I'm Rachel a curious creature with a scorpio sun, scorpio
      rising, and leo moon based in Durham, NC. I love coding and am grateful to
      have transitioned to this career path. I have always loved
      problem-solving, data and research. I have also loved creating, admiring
      beautiful things and simple design. Full stack allows me to combine it
      all. From querying databases to creating my own APIs to Machine Learning
      to UX/UI to just day to day trouble shooting/debugging so many aspects of
      my interests are fulfilled. I find the endless amount of knowledge and
      constant evolving of technologies to be tantilziing.{" "}
    </p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
