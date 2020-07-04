import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ListItemText from "@material-ui/core/ListItemText"


const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      // "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
      //   color: theme.palette.common.white,
      // },
    },
  },
}))(MenuItem)

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#ff00a9",
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

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            disableRipple="true"
          >
            <MenuIcon />
          </IconButton>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem button>
              <Link to="/about">
                <ListItemText primary="About" />
              </Link>
            </StyledMenuItem>
            <StyledMenuItem button>
              <Link to="/projects">
                <ListItemText primary="Projects" />
              </Link>
            </StyledMenuItem>
            <StyledMenuItem button>
              <Link to="/resume">
                <ListItemText primary="Resume" />
              </Link>
            </StyledMenuItem>
            <StyledMenuItem button>
              <Link to="/contact">
                <ListItemText primary="Contact" />
              </Link>
            </StyledMenuItem>
            <StyledMenuItem button>
              <Link to="/">
                <ListItemText primary="Home" />
              </Link>
            </StyledMenuItem>
          </StyledMenu>
          <Typography variant="h6" className={classes.title}>
            {siteTitle}
          </Typography>
          <Link to="/about">
            <Button className={classes.button}> ABOUT</Button>
          </Link>
          <Link to="/projects">
            <Button className={classes.button}> PROJECTS</Button>
          </Link>
          <Link to="/resume">
            <Button className={classes.button}> RESUME</Button>
          </Link>
          <Link to="/contact">
            <Button className={classes.button}> CONTACT</Button>
          </Link>
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
