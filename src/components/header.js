import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
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
import MoreIcon from "@material-ui/icons/MoreVert"

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
  grow: {
    flexGrow: 1,
  },
  button: {
    "&:hover": {
      backgroundColor: theme.palette.secondary,
      color: theme.palette.secondary,
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const mobileMenuId = "primary-search-account-menu-mobile"
  const renderMobileMenu = (
    <StyledMenu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <StyledMenuItem button>
        <Link to="/projects">
          <ListItemText primary="Projects" />
        </Link>
      </StyledMenuItem>
      <StyledMenuItem button>
        <Link to="/about">
          <ListItemText primary="About" />
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
  )

  return (
    <div className={classes.grow}>
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
            onClose={handleMenuClose}
          >
            <StyledMenuItem button>
              <Link to="/projects">
                <ListItemText primary="Projects" />
              </Link>
            </StyledMenuItem>
            <StyledMenuItem button>
              <Link to="/about">
                <ListItemText primary="About" />
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
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/projects">
              <Button className={classes.button}> PROJECTS</Button>
            </Link>
            <Link to="/about">
              <Button className={classes.button}> ABOUT</Button>
            </Link>
            <Link to="/resume">
              <Button className={classes.button}> RESUME</Button>
            </Link>
            <Link to="/contact">
              <Button className={classes.button}> CONTACT</Button>
            </Link>
            <Link to="/">
              <Button className={classes.button}> HOME</Button>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
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
