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
      have transitioned to this career path. Back in 2006,</p> <span><a href="https://github.com/jfischoff">my brother </a> </span>
      <p> tried to teach me to code. I didn't see the
      possibilties.{" "}
    </p>
    <p>
      After working in non-profit, marketing, legal and hospitality (full
      LinkedIn), I've spent the last decade searching for a career that I enjoy
      and can excel in. After one of my best friends(link) graduated from
      Project Shift (link), my interest piqued. I took the Prep Course last
      summer and my passion for software engineering was ignited. I have always
      loved problem-solving, data and research. I have also loved creating,
      admiring beautiful things and simple design. Fullstack allows me to
      combine it all. From querying databases to creating my own APIs to Machine
      Learning to UX/UI to just day to day trouble shooting/debugging so many
      aspects of my interests are fulfilled. I find the endless amount of
      knowledge and constant evolving of technologies to be tantilziing.{" "}
    </p>
    <p>
      I value equity and social justice above all. Often () My commitment to
      creating a most just society is reflected in my schooling, job history and
      personal life. I’m eager to use my skills to serve others in creating a
      more equitable society. I've also been able to volunteer with digital
      corps (OIT) and find queer community with OIT that recognize the
      importance of intersectionality + racial justice. I've been able to work
      on some open source projects (link) (link) + civic tech + (link to
      conference) Open Source is becoming one of my passions as it manifests my
      values within technology.{" "}
    </p>
    <p>
      My background contritbues to how I see the world and build
      software. I'm <strong>user-focused</strong> on how to best solve problems that
      customers face which I developed from over two decades in the service industry. I enjoy aesthetically pleasing things and solving problems
      in a way that also incorporates design. Design aids in learning, understanding, and ingesting
      information in a way that doesn't feel overwhelming.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
