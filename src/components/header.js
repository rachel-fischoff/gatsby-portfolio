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
import HomeIcon from '@material-ui/icons/Home';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import TextFieldsIcon from '@material-ui/icons/TextFields';




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
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
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
              <Link to="/About">
              <ListItemIcon>
                <SearchIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="About" />
              </Link>
            </StyledMenuItem>
            <StyledMenuItem button component={Link} to="/projects">
              <ListItemIcon>
                <TextFieldsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </StyledMenuItem>
            <StyledMenuItem button component={Link} to="/resume">
              <ListItemIcon>
                <TextFieldsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Resume" />
            </StyledMenuItem>
            <StyledMenuItem button component={Link} to="/contact">
              <ListItemIcon>
                <TextFieldsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </StyledMenuItem>
          </StyledMenu>
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
