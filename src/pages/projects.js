import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { makeStyles } from "@material-ui/core/styles"
import CardMedia from "@material-ui/core/CardMedia"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  overrides: {
    MuiExpansionPanelDetails: {
      root: {
        display: "block",
        textAlign: "center",
        alignItems: "center",
      },
    },
  },
  root: {
    textAlign: "center",
    display: "flex",
    "& > *": {
      margin: theme.spacing(0.5),
    },
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    width: "100%",
  },
  panel: {
    backgroundColor: '#37474f',
  },
  typography: {
    textAlign: "center",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: "#ff00a9",
    fontWeight: "bold",
  },
  expansionPanelDetails: {
    root: {
      display: "block",
    },
  }
}))

const Projects = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Layout>
      <SEO title="Projects" />
      <h1>Projects</h1>

      <ExpansionPanel
        className ={classes.panel}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Sentiment Analysis Demo
          </Typography>
          <Typography className={classes.secondaryHeading}>
          Twitter + Text Sentiment Analysis Project using a React - Flask app
          </Typography>
        </ExpansionPanelSummary>

        <AccordionDetails>
          <Card>
            <CardMedia
              component="video"
              height="280"
              image={require("../images/final_project.mp4")}
              title="sentiment analysis demo"
              controls
            />
          </Card>
        </AccordionDetails>
      </ExpansionPanel>
      <br/>
      <ExpansionPanel
        className ={classes.panel}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Products Demo
          </Typography>
          <Typography className={classes.secondaryHeading}>
          A Product List Application using React, Redux, Mongodb + Node.js
          </Typography>
        </ExpansionPanelSummary>

        <AccordionDetails>
          <Card>
            <CardMedia
              component="img"
              height="580"
              image={require("../images/product_list.png")}
              title="product list demo"
              controls
            />
          </Card>
        </AccordionDetails>
      </ExpansionPanel>
      <br/>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Projects
