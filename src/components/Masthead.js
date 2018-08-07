import React from 'react'

const Masthead = ({heading, subheading, action='Conheça', image='/img/header-bg.jpg'}) => (
  <header className="masthead" style={{backgroundImage: `url(${image})`}}>
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">{subheading}</div>
        <div className="intro-heading text-uppercase">{heading}</div>
        {action && <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#objetivos">{action}</a>}
      </div>
    </div>
  </header>
)

export default Masthead
