import React from 'react'

const InitiativesSection = () => {
  return (
    <section className="bg-light" id="iniciativas">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Iniciativas</h2>
            <h3 className="section-subheading text-muted">Projetos e iniciativas realizadas pela comunidade</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/iniciativas/1.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Grupos de Conversação</h4>
              <p className="text-muted">Ambiente interativo para a prática de idiomas</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/iniciativas/2.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Minicursos</h4>
              <p className="text-muted">Práticas abordando as mais recentes tecnologias</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 portfolio-item">
            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src="img/iniciativas/3.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Hackathons</h4>
              <p className="text-muted">Competições desafiadoras de programação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InitiativesSection
