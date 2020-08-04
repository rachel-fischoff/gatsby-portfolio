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
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
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
            A Product List Application using React, Redux, Mongodb + Node.js
          </Typography>
        </ExpansionPanelSummary>

        <AccordionDetails className={classes.expansionPanelDetails}>
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
          <div style = {{alignItems: 'center'}}>
            <a href="https://sites.google.com/view/nyc-2020-scikit-sprint/contributors">
              Contributor
            </a>
            <br />
            <a href="https://github.com/scikit-learn/scikit-learn/pull/17475">
              Github
            </a>
            </div>
          </AccordionDetails>

      </ExpansionPanel>
      <br />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Projects
