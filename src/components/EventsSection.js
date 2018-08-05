import React from 'react'

import events from '../assets/events.json'

const Event = ({image, when, title, description, link, isInverted}) => (
  <li className={`${isInverted ? 'timeline-inverted' : ''}`}>
    <div className="timeline-image">
      <img className="rounded-circle img-fluid" src={image} alt="" />
    </div>
    <div className="timeline-panel">
      <div className="timeline-heading">
        <h5 className="subheading">{when}</h5>
        <h3>{title}</h3>
      </div>
      <div className="timeline-body">
        <p className="text-muted">{description}</p>
      </div>
    </div>
  </li>
)

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
              {events.map((event, index) => (<Event key={index} isInverted={index % 2 === 0} {...event} />))}
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
