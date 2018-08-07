import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')

  window.onscroll = () => {
    const navbar = document.querySelector('#mainNav')
    const top = document.querySelector('#page-top').getBoundingClientRect().top + document.body.scrollTop
    if (top < -100) {
      navbar.classList.add('navbar-shrink')
    } else {
      navbar.classList.remove('navbar-shrink')
    }
  }
}

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
