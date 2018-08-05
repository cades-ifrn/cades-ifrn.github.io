import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Layout = ({ children, data }) => (
  <div id="page-top">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Conheça a Célula Acadêmica de Desenvolvimento de Software e suas iniciativas.' },
        { name: 'keywords', content: 'cades, ifrn' },
      ]}
    />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
