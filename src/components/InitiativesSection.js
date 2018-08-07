import React from 'react'
import Link from "gatsby-link"


const Initiative = ({title, description, url, thumbnail}) => (
  <div className="col-md-4 col-sm-6 portfolio-item">
    <Link className="portfolio-link" to={url}>
      <div className="portfolio-hover">
        <div className="portfolio-hover-content">
          <i className="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <div style={{
        width: '100%',
        height: '15rem',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url(${thumbnail})`
      }} src={thumbnail}></div>
    </Link>
    <div className="portfolio-caption">
      <h4>{title}</h4>
      <p className="text-muted">{description}</p>
    </div>
  </div>
)

const InitiativesSection = ({initiatives}) => {
  return (
    <section className="bg-light" id="iniciativas">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Iniciativas</h2>
            <h3 className="section-subheading text-muted">Projetos e iniciativas realizadas pela comunidade</h3>
          </div>
        </div>
        <div className="row" style={{justifyContent: "space-evenly"}}>
          {initiatives.map(({node}, index) => (
            <Initiative
              key={index}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              url={node.fields.slug}
              thumbnail={node.frontmatter.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default InitiativesSection