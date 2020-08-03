import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import CardMedia from "@material-ui/core/CardMedia"
import Card from "@material-ui/core/Card"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <p>Rachel Fischoff</p>

    <Card>
      <CardMedia
        component="video"
        height="280"
        image={require("../images/final_project.mp4")}
        title="sentiment analysis demo"
        controls
      />
    </Card>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Projects
