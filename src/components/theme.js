import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  palette: {
    primary: {
      light: "#000",
      main: "#000",
      dark: "#000",
      contrastText: "#18ffff",
    },
    secondary: {
      light: "#ff00a9",
      main: "#ff00a9",
      dark: "#ff00a9",
      contrastText: "#fff",
    },
    // type: "dark",
    background: {
      paper: "#000",
      default: "#000",
    },
    // action: {
    //   hover:'#1a237e',
    //   selected: '#1a237e'
    // },
  },

  // typography: {
  //   fontFamily: ["NotaSans", "Roboto"].join(","),
  // },
  overrides: {
    MuiButton: {
      root: {
        color: "#18ffff",
        "&:hover": {
          backgroundColor: "#ff00a9",
          contrastText: "#000",
          color: "#FFF",
        },
      }
    },
    MuiListItemButton: {
      root: {
        "&:hover": {
        backgroundColor: "#ff00a9",
        color: "#FFF",
      },
    }
    },
    MuiListItemIcon: {
      root: {
        color: '#18ffff',
      "&:hover": {
        backgroundColor: "#ff00a9",
        color: "#FFF",
      },
      minWidth: '0px'
    }
    },
    MuiSvgIcon: {
      root: {
        fill: '#18ffff'
        },
        "&:hover": {
          fill: "#fff"
      }
    }
  },
})

export default theme
