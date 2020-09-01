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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles(theme => ({
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
    backgroundColor: "#37474f",
  },
  typography: {
    fontSize: "15px",
    // textAlign: "center",
    padding: "8px 8px",
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
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
  anchor: {
    padding: theme.spacing(2),
  },
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
        className={classes.panel}
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

        <AccordionDetails className={classes.expansionPanelDetails}>
          <Typography className={classes.typography}>
            Final Individual Project for Project Shift - My Sentiment Analysis
            Application. Sentiment Analysis is a branch of Natural Language
            Processing(NLP) which is a form of Artificial Intelligence(AI) that
            analyzes people’s opinions & emotions. My application allows the
            user to enter original text or search Twitter by subject. The app
            then analyzes the original text or the text of the tweet as
            positive, negative or neutral. The user can toogle between analyzing
            text and tweets with NLTK’s VADER library or using the Machine
            Learning(ML) model I created with TensorFlow.
            <br />
            <br />
            Technologies: React, Hooks, Material-UI, Python, Pandas, Flask,
            TensorFlow, NLTK, Scikit-Learn
          </Typography>
          <br />
          <br />
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
      <br />
      <ExpansionPanel
        className={classes.panel}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Products Demo</Typography>
          <Typography className={classes.secondaryHeading}>
            A Product List Application using React, Redux, MongoDB + Node.js
          </Typography>
        </ExpansionPanelSummary>

        <AccordionDetails className={classes.expansionPanelDetails}>
          <Typography className={classes.typography}>
            <br />
            <br />
          </Typography>
          <Card>
            <CardMedia
              component="video"
              height="280"
              image={require("../images/prodcuts_demo.mp4")}
              title="product list demo"
              controls
            />
          </Card>
        </AccordionDetails>
      </ExpansionPanel>
      <br />
      <ExpansionPanel
        className={classes.panel}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            Scikit-Learn Sprint
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Contributed to June 2020 sklearn open source sprint
          </Typography>
        </ExpansionPanelSummary>

        <AccordionDetails className={classes.expansionPanelDetails}>
          <a
            className={classes.anchor}
            href="https://sites.google.com/view/nyc-2020-scikit-sprint/contributors"
          >
            Contributor
          </a>
          <br />
          <br />
          <a
            className={classes.anchor}
            href="https://github.com/scikit-learn/scikit-learn/pull/17475"
          >
            Github
          </a>
        </AccordionDetails>
      </ExpansionPanel>
      <br />
      <ExpansionPanel
        className={classes.panel}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            Portfolio Gatbsy Starter
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Working on a Gatsby Starter for Digital Professionals with Katy
            Anderson
          </Typography>
        </ExpansionPanelSummary>

        <AccordionDetails className={classes.expansionPanelDetails}>
          <br />
          <br />
          <a
            className={classes.anchor}
            href="https://portfolio-starter-gatsby.netlify.app/"
          >
            Demo
          </a>
        </AccordionDetails>
      </ExpansionPanel>
      <br />

      <h1 style={{ textAlign: "center" }}>More Coming Soon</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Projects
