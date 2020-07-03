import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#1a237e",
      contrastText: "#000",
      color: "#FFF",
    },
  },
  title: {
    flexGrow: 1,
  },
  button: {
    "&:hover": {
      backgroundColor: theme.palette.secondary,
      color: theme.palette.secondary,
    },
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {siteTitle}
          </Typography>
          <Button className={classes.button}> ABOUT</Button>
          <Button className={classes.button}> PROJECTS</Button>
          <Button className={classes.button}> RESUME</Button>
          <Button className={classes.button}> CONTACT</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
