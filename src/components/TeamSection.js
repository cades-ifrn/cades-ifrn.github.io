import React from 'react'

import members from '../assets/members.json'

const SocialLink = ({name, url}) => {
  if (url === null) {
    return null
  }

  return (
    <li className="list-inline-item">
      <a href={url}>
        <i className={`fa fa-${name}`}></i>
      </a>
    </li>
  )
}

const SocialLinks = ({links}) => (
  <ul className="list-inline social-buttons">
    {Object.keys(links).map(((social, index) => <SocialLink key={index} name={social} url={links[social]} />)).filter(Boolean)}
  </ul>
)

const Member = ({name, description, image, ...socialLinks}) => (
  <div className="col-sm-3">
    <div className="team-member">
      <img className="mx-auto rounded-circle" src={image} alt=""/>
      <h4>{name}</h4>
      <p className="text-muted">{description}</p>
      <SocialLinks links={socialLinks} />
    </div>
  </div>
)

const TeamSection = () => {
  return (
    <section className="bg-light" id="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Nossos Membros</h2>
            <h3 className="section-subheading text-muted">Participantes que contribuem para o desenvolvimento da célula acadêmica</h3>
          </div>
        </div>
        <div className="row" style={{justifyContent: "space-evenly"}}>
          {members.map((member, index) => <Member key={index} {...member} />)}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
