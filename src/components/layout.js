/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"

import favicon from "../images/favicon.png"
import Helmet from "react-helmet"
import theme from "./theme"
import Header from "./header"
import "./layout.css"
import SideBar from "./side-bar"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header siteTitle={data.site.siteMetadata.title} />
        <SideBar />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main> {children} </main>
          <footer>
            {" "}
            ©{new Date().getFullYear()}, Built with {` `}{" "}
            <a href="https://www.gatsbyjs.org"> Gatsby </a>{" "}
          </footer>{" "}
        </div>{" "}
      </ThemeProvider>{" "}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
