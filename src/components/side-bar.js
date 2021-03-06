import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 60,
    backgroundColor: "#18ffff",
    flexGrow: 1,
    display: "flex",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: "200px",
    left: "8px",
    right: "auto",
    zIndex: 10,
  },
}))

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

export default function SideBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List
        component="nav"
        aria-label="links for contact"
        className={classes.list}
      >
        <ListItem button>
          <ListItemIcon>
            <GitHubIcon
              onClick={() =>
                window.open("https://github.com/rachel-fischoff", "blank")
              }
            />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LinkedInIcon
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/rachel-fischoff-b4953536/",
                  "blank"
                )
              }
            />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <a href="mailto:rfischoff@gmail.com"> 
            <MailOutlineIcon />
            </a>
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  )
}
