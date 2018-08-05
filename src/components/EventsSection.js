import React from 'react'

const EventsSection = () => {
  return (
    <section id="eventos">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Eventos</h2>
            <h3 className="section-subheading text-muted">Confira quais serão os próximos eventos que estaremos organizando ou participando.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
             {/* <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/1.jpeg" alt="">
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>11 a 13/06</h4>
                    <h4 className="subheading">8° WTADS</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">O 8° Workshop de Tecnologia em Análise e Desenvolvimento de Sistemas (WTADS) contará com palestras, minicursos, mesas-redondas e apresentações de TCCs dos alunos do curso de Análise e Desenvolvimento de Sistemas do IFRN - Campus Natal Central.</p>
                  </div>
                </div>
              </li> */}
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>Em breve
                    <br/>mais
                    <br/>eventos!</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection
