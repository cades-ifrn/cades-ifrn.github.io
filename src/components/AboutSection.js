import React from 'react'

const AboutSection = () => {
  return (
    <section id="objetivos">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Objetivos</h2>
            <h3 className="section-subheading text-muted">Conceitos que regem e movem a comunidade.</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-flag fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Missão</h4>
            <p className="text-muted">Ajudar na aproximação dos estudantes ao mercado e ampliar a rede de relacionamentos profissionais.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-eye fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Visão</h4>
            <p className="text-muted">Ser uma comunidade ativa e de referência para os estudantes de tecnologia do IFRN e da DIATINF.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-handshake-o fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Valores</h4>
            <p className="text-muted">Nossos valores fundamentais são: etica, inovação, respeito, profissionalismo e inclusão.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
